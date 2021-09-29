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
  isEmpty: boolean = true;
  qtdFavorites: number = 0
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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

}
