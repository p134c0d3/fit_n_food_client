import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/food';
import { NgForOf, NgIf } from '@angular/common';
import { FoodService } from '../../core/services/food.service';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(private foodService:FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        const user_id: number = +params['user_id'];
        this.foodService.getFood(user_id).subscribe({
          next: (foods: Food[]) => {
            this.food = foods;
          },
          error: (error: any ) => {
            console.log('Error fetching foods', error);

          }
        })
      })
  }

  addFood() {
    console.log('Food added!');

  }

}
