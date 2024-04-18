import { Component, OnInit } from '@angular/core';
import { Water } from '../../shared/models/water';
import { NgForOf, NgIf } from '@angular/common';
import { WaterService } from '../../core/services/water.service';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(private waterService: WaterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const user_id: number = +params['user_id'];
      this.waterService.getWater(user_id).subscribe({
        next: (drinks: Water[]) => {
          // debugger
          console.log(drinks);
          this.drinks = drinks;
        },
        error: (error: any) => {
          console.log('Error fetching water', error);
        },
      })
    })

    // this.waterService.getWater(user_id).subscribe({
    //   next: (drinks: Water[]) => {
    //     // debugger
    //     console.log(drinks);
    //     this.drinks = drinks;
    //   },
    //   error: (error: any) => {
    //     console.log('Error fetching water', error);
    //   },
    // });
  }

  addWater() {
    console.log('Water added!');
  }
}
