import { Pokemon } from './../models/pokemon.model';
import { PokeapiService } from './../services/pokeapi.service';
import { Rotas } from './../utils/rotas.enum';
import { faSignOutAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faHeart = faHeart;
  pokemon: Pokemon;

  constructor(
    private router: Router,
    private Pokeservice: PokeapiService
  ) { }

  ngOnInit(): void {
    this.Pokeservice.detailPokemon().subscribe((res:Pokemon) => {
      this.pokemon = res
      console.log(this.pokemon)
    })
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

}
