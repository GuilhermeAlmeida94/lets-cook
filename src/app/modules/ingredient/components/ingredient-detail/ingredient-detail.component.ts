import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.scss']
})
export class IngredientDetailComponent implements OnInit {
  private idSubject = new BehaviorSubject<string>('0');
  id$ = this.idSubject.asObservable();

  imageName = '';

  constructor(
    private route: ActivatedRoute,
    private ingredientService: IngredientService
  ) {}

  ingredient$ = this.id$.pipe(
    concatMap((id) => this.ingredientService.information(id)),
    tap((recipe) => console.log(recipe))
  );

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.idSubject.next(id);

    this.imageName = this.route.snapshot.paramMap.get('imageName') as string;
  }
  
  get imageUrl(): string {
    return `https://spoonacular.com/cdn/ingredients_250x250/${this.imageName}`;
  }
}
