import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/food';
import { NgForOf, NgIf } from '@angular/common';
import { FoodService } from '../../core/services/food.service';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent implements OnInit{

  food: Food[] = [];
  totalConsumedCalories: number = 1200;

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
      this.foodService.getFood().subscribe({
        next: (food: Food[]) => {
          this.food = food
        },
        error: (error:any) => {
          console.log('Error fetching food', error);

        }
      })
  }

  addFood() {
    console.log('Food added!');

  }

}
