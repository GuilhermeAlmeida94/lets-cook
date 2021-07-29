import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail-resolver',
  templateUrl: './product-detail-resolver.component.html',
  styleUrls: ['./product-detail-resolver.component.scss'],
})
export class ProductDetailResolverComponent {
  imageUrl = '';

  constructor(private route: ActivatedRoute) {}

  productData$ = this.route.data.pipe(
    map(resolver => resolver.productData),
    tap(data => console.log(data))
  );
}
