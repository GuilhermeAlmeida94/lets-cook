import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  private idSubject = new BehaviorSubject<string>('0');
  id$ = this.idSubject.asObservable();

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  recipe$ = this.id$.pipe(
    concatMap((id) => this.recipeService.information(id)),
    tap((recipe) => console.log(recipe))
  );

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.idSubject.next(id);
  }
}
