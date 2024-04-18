import { Component, OnInit } from '@angular/core';
import { Workout } from '../../shared/models/workout';
import { NgForOf, NgIf } from '@angular/common';
import { WorkoutService } from '../../core/services/workout.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss'
})
export class WorkoutComponent implements OnInit{
  workout: Workout[] = []

  totalBurnedCalories:number = 500;
  constructor(private workoutService:WorkoutService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      const user_id: number = +params['user_id'];
      this.workoutService.getWorkouts(user_id).subscribe({
        next: (workouts: Workout[]) => {
          this.workout = workouts;
        },
        error: (error: any) => {
          console.log('Error fetching workouts', error);
        },
      })
    })

  }

  addWorkout() {
    console.log('Workout added!');
  }

}
