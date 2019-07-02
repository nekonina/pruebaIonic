import { Injectable } from '@angular/core';
import {Recipe} from './recipes.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  private recipes: Recipe[] = [
  {
    id: 'r1',
    title: 'tequeno',
    imageUrl: 'https://locosxlagastronomia.com/wp-content/uploads/2017/12/Tequenos-frenteG.jpg',
    ingredients: ['harina','queso','aceite']
  },
  {
    id:'r2',
    title:'torta',
    imageUrl:'https://t1.rg.ltmcdn.com/es/images/3/6/1/img_torta_fria_de_fresas_46163_600.jpg',
    ingredients:['fresas','crema','harina','huevo','leche','azucar']
  }
  ];


  constructor() { }

  getAllRecipes() {
    return[...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }


  deleteRecipe(recipeId: string) {
     this.recipes = this.recipes.filter(recipe => {
       return recipe.id !== recipeId;
     });
  }
}
