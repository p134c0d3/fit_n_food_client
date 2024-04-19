import { Component, OnInit } from '@angular/core';
import { Water } from '../../shared/models/water';
import { NgForOf, NgIf } from '@angular/common';
import { WaterService } from '../../core/services/water.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-water',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule],
  templateUrl: './water.component.html',
  styleUrl: './water.component.scss',
})
export class WaterComponent implements OnInit {
  drinks: Water[] = [];
  totalOunces: number = 50;

  newWaterForm: FormGroup = new FormGroup({
    ounces: new FormControl('', Validators.required),
  })

  constructor(private waterService: WaterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setWater();

  }
  setWater() {
    this.waterService.getWater().subscribe({
      next: (waters: Water[]) => {
        this.drinks = waters;
      },
      error: (error:any) => {
        console.log('Error fetching water', error);

      }
    })

  }

  addWater() {
    if (this.newWaterForm.valid) {
      this.waterService.newWater(this.newWaterForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.setWater();
        },
        error: (error: any) => {
          console.log('Error adding water', error);
        },
        complete: () => {
          this.newWaterForm.reset();
        },
      })
    }
  }
}
