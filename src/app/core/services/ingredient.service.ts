import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private serviceUrl = 'food/ingredients/';

  constructor(private httpClient: HttpClient) { }

  search(queryName: string, offset: number): Observable<any> {
    const method = 'search?';
    const query = `query=${queryName}&offset=${offset}`

    const url = `${environment.baseUrl}${this.serviceUrl}${method}${query}&${environment.apiKey}`;
    return this.httpClient.get(url);
  }
}
