import { FormBuilder, FormGroup } from '@angular/forms';
import { Rotas } from './../utils/rotas.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faSearch = faSearch;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {

    this.loginForm = this.formBuilder.group({
      search: [""],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.loginForm.value);
    this.router.navigate([Rotas.HOME])
    this.loginForm.reset();

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
