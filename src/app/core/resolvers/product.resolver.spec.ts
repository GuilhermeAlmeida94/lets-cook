/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductResolver } from './product.resolver';

describe('Service: Resolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolver]
    });
  });

  it('should ...', inject([ProductResolver], (service: ProductResolver) => {
    expect(service).toBeTruthy();
  }));
});
