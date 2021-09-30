import { Pokemon } from './../models/pokemon.model';
import { AppState } from './../app.state';
import { Rotas } from './../utils/rotas.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faHeart = faHeart;

  constructor(
    private router: Router,
    public appState: AppState
  ) { }

  ngOnInit(): void {
    console.log(this.appState.favoritesPokemons)
    this.appState.favoritesPokemons.length > 0 ? this.appState.isEmpty = false : this.appState.isEmpty = true
  }

  home(){
    this.router.navigate([Rotas.HOME])
  }

  search(){
    this.router.navigate([Rotas.SEARCH])
  }

  favorites(){
    this.router.navigate([Rotas.FAVORITES])
  }

  exit(){
    this.router.navigate([Rotas.LOGIN])
  }

  fav(pokemon: Pokemon) {
    if (!pokemon.isFav) {
      pokemon.isFav = true;
      this.appState.favoritesPokemons.push(pokemon);
    }
    else {
      pokemon.isFav = false;
      this.appState.favoritesPokemons.pop();
      if(this.appState.favoritesPokemons.length < 1){
        this.appState.isEmpty = true;
      }
    }
  }

}
