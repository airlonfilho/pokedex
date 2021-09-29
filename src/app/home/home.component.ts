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

  pokemons: any[] = [
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
    {
      name: "pikachu", id: "101", types: [
        { name: "eletric" }, { name: "fire" }
      ]
    },
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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
