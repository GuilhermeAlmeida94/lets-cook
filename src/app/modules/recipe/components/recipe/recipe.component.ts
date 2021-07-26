import { Component } from '@angular/core';
import { RecipesService } from 'src/app/core/services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  randomRecipes$ = this.recepiesService.random(5);

  constructor(private recepiesService: RecipesService) { }
}
