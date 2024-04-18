import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    LoginComponent,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
