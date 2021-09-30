import { AppState } from './../app.state';
import { TYPES } from './../utils/types.enum';
import { Pokemon } from './../models/pokemon.model';
import { PokeapiService } from './../services/pokeapi.service';
import { Rotas } from './../utils/rotas.enum';
import { faSignOutAlt, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faHeart = faHeart;
  faTimes = faTimes;

  isLoading: boolean = false;
  pokemon: Pokemon;
  id: number = 0
  pokemons: Pokemon[] = []
  type: any;
  typeLength: number = 0;
  idForType: number[] = [];
  fire: TYPES = TYPES.FIRE
  electric: TYPES = TYPES.ELECTRIC
  water: TYPES = TYPES.WATER
  todos: boolean = true
  fireButton: boolean = false
  electricButton: boolean = false
  waterButton: boolean = false
  detailModal: any;
  validar: boolean = true;

  constructor(
    private router: Router,
    private Pokeservice: PokeapiService,
    public appState: AppState,
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
    //this.isLoading = true;
    this.verTodos();
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
  }

  home() {
    this.router.navigate([Rotas.HOME])
  }

  search() {
    this.router.navigate([Rotas.SEARCH])
  }

  favorites() {
    this.router.navigate([Rotas.FAVORITES])
  }

  exit() {
    this.router.navigate([Rotas.LOGIN])
  }

  verTodos() {
    this.todos = true
    this.waterButton = false
    this.fireButton = false
    this.electricButton = false

    this.pokemons = []
    for (let i = 0; i < 100; i++) {
      this.id = i + 1
      this.Pokeservice.detailPokemon(this.id).subscribe((res: any) => {
        this.pokemons[i] = res
      })
    }

  }

  filterType(type: TYPES) {
    if (type == TYPES.FIRE) {
      this.fireButton = true
      this.todos = false
      this.waterButton = false
      this.electricButton = false
    }

    if (type == TYPES.ELECTRIC) {
      this.electricButton = true
      this.todos = false
      this.waterButton = false
      this.fireButton = false
    }

    if (type == TYPES.WATER) {
      this.waterButton = true
      this.todos = false
      this.fireButton = false
      this.electricButton = false
    }
    this.Pokeservice.typePokemon(type).subscribe((res: any) => {
      this.type = res
      this.typeLength = this.type.pokemon.length
      this.pokemons = []
      for (let i = 0; i < this.typeLength; i++) {
        let id = this.type.pokemon[i].pokemon.url.split("pokemon/");
        //this.idForType[i] = id[1]
        this.id = id[1]
        this.Pokeservice.detailPokemon(this.id).subscribe((res: any) => {
          this.pokemons[i] = res
        })
      }
      console.log(this.pokemons)
    })
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

  openModal(id: string, pokemon: Pokemon) {

    this.detailModal = pokemon
    console.log(this.detailModal)
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
