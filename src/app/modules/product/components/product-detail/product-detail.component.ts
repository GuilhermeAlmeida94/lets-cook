import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  private idSubject = new BehaviorSubject<string>('0');
  id$ = this.idSubject.asObservable();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  product$ = this.id$.pipe(
    concatMap((id) => this.productService.information(id)),
    tap((recipe) => console.log(recipe))
  );

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.idSubject.next(id);
  }
}
