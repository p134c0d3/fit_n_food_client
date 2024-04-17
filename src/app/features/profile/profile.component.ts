import { Component, OnInit } from '@angular/core';
import { Profile } from '../../shared/models/profile';
import { NgForOf, NgIf } from '@angular/common';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit{
  userProfile: Profile[] = []
  firstName: string = 'John';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
      this.profileService.getProfile().subscribe({
        next: (myprofile: Profile[]) => {
          this.userProfile = myprofile
        },
        error: (error:any) => {
          console.log('Error fetching profile', error);
        }
      })
  }

  updateProfile() {
    console.log('Profile updated!');
  }
}
