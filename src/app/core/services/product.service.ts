import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private serviceUrl = 'food/products/';

  constructor(private httpClient: HttpClient) {}

  information(id: string | null): Observable<any> {
    const url = `${environment.baseUrl}${this.serviceUrl}${id}?${environment.apiKey}`;
    return this.httpClient.get(url).pipe(delay(2000));
  }

  search(queryName: string, offset: number): Observable<any> {
    const method = 'search?';
    const query = `query=${queryName}&offset=${offset}`;

    const url = `${environment.baseUrl}${this.serviceUrl}${method}${query}&${environment.apiKey}`;
    return this.httpClient.get(url);
  }
}
