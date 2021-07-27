import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  EMPTY,
  Observable,
  Subject,
} from 'rxjs';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import {
  catchError,
  concatMap,
  debounceTime,
  startWith,
  tap,
} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent {
  private offsetSubject = new BehaviorSubject<number>(0);
  offset$ = this.offsetSubject.asObservable();

  private searchSubject = new BehaviorSubject<number>(0);
  search$ = this.searchSubject.asObservable();

  private errorSubject = new Subject<any>();
  error$ = this.errorSubject.asObservable();

  currentPage = 1;
  private itemsPerPage = 10;
  showImage = false;
  formGroup: FormGroup;

  ingredients$: Observable<any> | undefined;

  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.showImage = JSON.parse(
      this.route.snapshot.queryParamMap?.get('showImage') ?? 'false'
    );
    const currentPage = this.route.snapshot.queryParamMap.get(
      'currentPage'
    ) as unknown as number;
    const queryName = this.route.snapshot.queryParamMap.get(
      'queryName'
    ) as string;

    this.formGroup = this.formBuilder.group({
      queryName: [{ value: '', disabled: false }, Validators.required],
    });

    const queryName$ = (
      this.formGroup.get('queryName')?.valueChanges as Observable<any>
    ).pipe(
      startWith(queryName),
      debounceTime(1000),
      tap((_) => (this.currentPage = 1))
    );
    this.ingredients$ = combineLatest([queryName$, this.offset$]).pipe(
      concatMap(([queryName, offset]) =>
        queryName ? this.ingredientService.search(queryName, offset) : EMPTY
      ),
      catchError((error) => {
        console.log(error);
        this.errorSubject.next(error);
        return EMPTY;
      })
    );

    if (currentPage) {
      this.currentPage = currentPage;
      this.offsetSubject.next(10 * (this.currentPage - 1));
    }
    if (queryName) {
      this.formGroup.get('queryName')?.setValue(queryName);
      this.formGroup.updateValueAndValidity({
        onlySelf: false,
        emitEvent: true,
      });
    }
  }

  search(): void {
    this.searchSubject.next(1);
  }

  imageUrl(imageName: string): string {
    return `https://spoonacular.com/cdn/ingredients_100x100/${imageName}`;
  }

  maxPagesByTotalItems(totalItems: number): number {
    return Math.ceil(totalItems / this.itemsPerPage);
  }

  previous(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.offsetSubject.next(10 * (this.currentPage - 1));
    }
  }

  next(totalItems: number): void {
    if (this.currentPage < this.maxPagesByTotalItems(totalItems)) {
      this.currentPage += 1;
      this.offsetSubject.next(10 * (this.currentPage - 1));
    }
  }

  toggleImages(): void {
    this.showImage = !this.showImage;
  }
}
