import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipe',
    loadChildren: () => import('./modules/recipe/recipe.module').then(m => m.RecipeModule),
  },
  {
    path: 'ingredient',
    loadChildren: () => import('./modules/ingredient/ingredient.module').then(m => m.IngredientModule),
  },
  {
    path: '**',
    redirectTo: 'recipe',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
