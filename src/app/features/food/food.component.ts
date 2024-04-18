import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/food';
import { NgForOf, NgIf } from '@angular/common';
import { FoodService } from '../../core/services/food.service';
import { ActivatedRoute, Params } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent implements OnInit {
  food: Food[] = [];
  totalConsumedCalories: number = 1200;

  newFoodForm: FormGroup = new FormGroup({
    food_name: new FormControl('', Validators.required),
    calories: new FormControl('', Validators.required),
  });

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setFoods()
  }

  setFoods() {
    this.foodService.getFood().subscribe({
      next: (foods: Food[]) => {
        this.food = foods;
      },
      error: (error: any) => {
        console.log('Error fetching foods', error);
      },
    });
  }

  addFood() {
    if (this.newFoodForm.valid) {
      this.foodService.newFood(this.newFoodForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.setFoods();
        },
        error: (error: any) => {
          console.log('Error adding food', error);
        },
        complete: () => {
          this.newFoodForm.reset();
        },
      });
    }
  }
}
