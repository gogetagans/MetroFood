import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { LoginService } from '@services/loginService/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule,
    ReactiveFormsModule, MatButtonModule]
})
export class LoginComponent {
  usernameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  constructor(public loginService: LoginService, private router: Router) { }

  isButtonDisabled(): boolean {
    return (this.usernameFormControl.dirty && this.usernameFormControl.invalid) || (this.passwordFormControl.dirty && this.passwordFormControl.invalid);
  }

  onClickEnter(): void {
    const { value } = this.usernameFormControl;
    this.loginService.login(value);
    this.router.navigate(['/']);
  }
}

