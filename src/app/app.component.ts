import { Component } from '@angular/core';
import { RecipesService } from './core/services/recipes.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lets-cook';

  recipes$ = this.recepiesService.findByIngredients('pasta')
    .pipe(
      tap(recepies => console.log(recepies))
    );

  constructor(private recepiesService: RecipesService) { }
}