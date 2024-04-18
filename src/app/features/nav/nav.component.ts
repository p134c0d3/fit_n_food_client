import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isLoggedIn: boolean = false;


  constructor(private authService: AuthenticationService) {

    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
