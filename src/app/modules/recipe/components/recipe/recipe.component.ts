import { Component } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  
  private errorSubject = new Subject<any>();
  error$ = this.errorSubject.asObservable();

  randomRecipes$ = this.recepieService.random(5).pipe(
    catchError((error) => {
      console.log(error);
      this.errorSubject.next(error);
      return EMPTY;
    })
  );

  constructor(private recepieService: RecipeService) { }
}
