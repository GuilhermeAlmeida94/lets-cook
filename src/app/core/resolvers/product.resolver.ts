import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id') as string;

    if (isNaN(+id)) {
      return of({product: null, error: `Product id was not a number ${id}`});
    }

    return this.productService.information(id).pipe(
      map(product => ({ product })),
      catchError(_ => of({product: null, error: `Product with id ${id} was not found`}))
    );
  }

}
