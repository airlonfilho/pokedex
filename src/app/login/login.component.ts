import { LocalStorageService } from './../services/local-storage.service';
import { Rotas } from './../utils/rotas.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isDark: boolean = false;
  faMoon = faMoon;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {

    this.loginForm = this.formBuilder.group({
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    if (this.localStorageService.get("email") === 'airlonfilho@gmail.com') {
      this.router.navigate([Rotas.HOME])
    }
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.loginForm.value);
    this.localStorageService.set("email", this.loginForm.value.email);
    this.localStorageService.set("password", this.loginForm.value.password);
    this.router.navigate([Rotas.HOME])
    this.loginForm.reset();

  }



}
