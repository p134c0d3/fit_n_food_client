import { Component, OnInit } from '@angular/core';
import { Workout } from '../../shared/models/workout';
import { NgForOf, NgIf } from '@angular/common';
import { WorkoutService } from '../../core/services/workout.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent implements OnInit {
  workout: Workout[] = [];

  totalBurnedCalories: number = 500;

  newWorkoutForm: FormGroup = new FormGroup({
    workout_name: new FormControl('', Validators.required),
    sets: new FormControl('', Validators.required),
    reps: new FormControl('', Validators.required),
    calories_burned: new FormControl('', Validators.required)
  })
  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setWorkouts();
  }

  setWorkouts() {
    this.workoutService.getWorkouts().subscribe({
      next: (workouts: Workout[]) => {
        this.workout = workouts;
      },
      error: (error:any) => {
        console.log('Error fetching workout', error);

      }
    })
  }

  addWorkout() {
    if (this.newWorkoutForm.valid) {
      this.workoutService.newWorkout(this.newWorkoutForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.setWorkouts();
        },
        error: (error: any) => {
          console.log('Error adding workout', error);
        },
        complete: () => {
          this.newWorkoutForm.reset();
        },
      })
    }
  }
}
