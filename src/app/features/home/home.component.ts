import { Component } from '@angular/core';
import { WorkoutComponent } from '../workout/workout.component';
import { FoodComponent } from '../food/food.component';
import { WaterComponent } from '../water/water.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WorkoutComponent,
    FoodComponent,
    WaterComponent,
    ProfileComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
