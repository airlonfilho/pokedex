import { Pokemon } from './models/pokemon.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppState {
  isFav: boolean = false;
  isEmpty: boolean = true;
  qtdFavorites: number = 0
  favoritesPokemons: Pokemon[] = [];

}
