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
    private router: Router
    ) {

    this.loginForm = this.formBuilder.group({
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
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



}
