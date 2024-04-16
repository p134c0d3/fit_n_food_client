import { Component, OnInit } from '@angular/core';
import { Water } from '../../shared/models/water';
import { NgForOf, NgIf } from '@angular/common';
import { WaterService } from '../../core/services/water.service';

@Component({
  selector: 'app-water',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './water.component.html',
  styleUrl: './water.component.scss',
})
export class WaterComponent implements OnInit {
  drinks: Water[] = [];
  totalOunces: number = 50;

  constructor(private waterService: WaterService) {}

  ngOnInit(): void {
    this.waterService.getWater().subscribe({
      next: (drinks: Water[]) => {
        // debugger
        console.log(drinks);
        this.drinks = drinks;
      },
      error: (error: any) => {
        console.log('Error fetching water', error);
      },
    });
  }

  addWater() {
    console.log('Water added!');
  }
}
