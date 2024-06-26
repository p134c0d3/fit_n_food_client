import { Component, OnInit } from '@angular/core';
import { Profile } from '../../shared/models/profile';
import { NgForOf, NgIf } from '@angular/common';
import { ProfileService } from '../../core/services/profile.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  userProfile: Profile = { bio: '', goals: '' };
  firstName: string = 'John';

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setProfile();

  }

  setProfile() {
    this.profileService.getProfile().subscribe((profile) => {
      this.userProfile = profile;
    });
  }

  updateProfile() {
    console.log('Profile updated!');
  }
}
