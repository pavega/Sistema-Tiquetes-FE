import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Credentials } from '../../common/interfaces';
import { validateCredentials } from '../../common/utils';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LoggedUser, Login } from '../../model/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    FontAwesomeModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword!: boolean;
  submitted: boolean = false;
  credentialsError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get l() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const credentials: Login = {
      Correo: this.l['email'].value,
      Clave: this.l['password'].value,
    };

    this.authService.authenticate(credentials).subscribe({
      next: (loggedUser) => {
        this.credentialsError = false;
        console.log('Autenticación exitosa', loggedUser);
        localStorage.setItem('logged', 'true');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.credentialsError = true;
      },
    });

    //TODO: Cambiar por validacion con el back
    // if (validateCredentials(credentials.email, credentials.password)) {
    //   this.credentialsError = false;
    //   localStorage.setItem('logged', 'true');
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.credentialsError = true;
    // }
  }
}
