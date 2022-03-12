import {Component,  EventEmitter,  OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

@Output()  recipeSelected = new EventEmitter<Recipe>();

  recipe: Recipe[] = [
      new Recipe('Recipe 1',
      'Testing Desc 1' ,
       'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.2131815876.1642809600'),
       new Recipe('Recipe 2',
      'Testing Desc 2' ,
       'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.2131815876.1642809600')
   ] ;
  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelect(recipe:Recipe){
    console.log(recipe)
    this.recipeSelected.emit(recipe)
  }
}
