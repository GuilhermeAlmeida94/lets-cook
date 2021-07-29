import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailResolverComponent } from './components/product-detail-resolver/product-detail-resolver.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductDetailResolverComponent
  ]
})
export class ProductModule { }
