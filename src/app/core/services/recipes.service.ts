import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  serviceUrl = 'recipes/';

  constructor(private httpClient: HttpClient) { }

  findByIngredients(ingredient: string): Observable<any> {
    const method = 'findByIngredients?';
    const input = `ingredients=${ingredient}`;

    const url = `${environment.baseUrl}${this.serviceUrl}${method}${input}&${environment.apiKey}`;
    return this.httpClient.get(url);
  }
}
