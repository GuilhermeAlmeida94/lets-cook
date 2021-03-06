import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IngredientRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    IngredientComponent,
    IngredientDetailComponent
  ]
})
export class IngredientModule { }
