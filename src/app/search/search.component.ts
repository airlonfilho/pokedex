import { AppState } from './../app.state';
import { Pokemon } from './../models/pokemon.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Rotas } from './../utils/rotas.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faSearch = faSearch;
  faHeart = faHeart;

  searchForm: FormGroup;
  searchValue: string;
  pokemon: Pokemon;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pokeservice: PokeapiService,
    public appState: AppState
    ) {

    this.searchForm = this.formBuilder.group({
      search: [""],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.searchValue = this.searchForm.value.search

    this.pokeservice.detailPokemon(this.searchValue).subscribe((res: Pokemon) => {
      this.pokemon = res
    })
    this.searchForm.reset();
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
    }
  }


}
