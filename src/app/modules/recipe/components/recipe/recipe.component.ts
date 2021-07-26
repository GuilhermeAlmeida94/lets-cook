import { Component } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  randomRecipes$ = this.recepieService.random(5);

  constructor(private recepieService: RecipeService) { }
}
