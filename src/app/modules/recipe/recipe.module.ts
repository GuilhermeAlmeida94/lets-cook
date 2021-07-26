import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecipeRoutingModule
  ],
  declarations: [
    RecipeComponent,
    RecipeDetailComponent
  ]
})
export class RecipeModule { }
