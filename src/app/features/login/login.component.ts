import { AuthenticationService } from './../../core/services/authentication.service';
import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SignupComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  isError:boolean = false;
  constructor(private authService: AuthenticationService, private router:Router) {}

  login() {
    if(this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.authService.login(email, password).subscribe({
        next: (res:any) => {
          console.log(res);
          this.authService.setToken(res.token);
          this.authService.getToken();
          this.router.navigate(['/home']);
          this.isError = false;
        },
        error: (error: any) => {
          console.log('Error logging in', error);
          this.isError = true;
        }
      })
    }
  }

}
