import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientComponent
  },
  {
    path: ':id',
    component: IngredientDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }