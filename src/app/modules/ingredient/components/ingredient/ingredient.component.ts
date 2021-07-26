import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { concatMap, debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent {
  private offsetSubject = new BehaviorSubject<number>(0);
  offset$ = this.offsetSubject.asObservable();

  currentPage = 1;
  private itemsPerPage = 10;

  showImages = false;

  formGroup: FormGroup;
  ingredients$: Observable<any> | undefined;

  constructor(
    private ingredientService: IngredientService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      queryName: [{ value: '', disabled: false }, Validators.required],
    });

    const queryName$ = (
      this.formGroup.get('queryName')?.valueChanges as Observable<any>
    ).pipe(
      debounceTime(1000),
      tap((_) => (this.currentPage = 1))
    );
    this.ingredients$ = combineLatest([queryName$, this.offset$]).pipe(
      concatMap(([queryName, offset]) =>
        this.ingredientService.search(queryName, offset)
      )
    );
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
    this.showImages = !this.showImages;
  }
}
