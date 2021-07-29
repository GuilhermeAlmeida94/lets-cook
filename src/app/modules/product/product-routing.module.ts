import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from 'src/app/core/resolvers/product.resolver';
import { ProductDetailResolverComponent } from './components/product-detail-resolver/product-detail-resolver.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: '/simple/:id',
    component: ProductDetailComponent,
  },
  {
    path: ':id',
    component: ProductDetailResolverComponent,
    resolve: { productData: ProductResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
