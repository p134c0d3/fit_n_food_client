import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'signup',
    pathMatch: 'full',
    loadComponent: () => import('./features/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'profile',
    pathMatch: 'full',
    loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'workouts',
    pathMatch: 'full',
    loadComponent: () => import('./features/workout/workout.component').then(m => m.WorkoutComponent)
  },
  {
    path: 'food',
    pathMatch: 'full',
    loadComponent: () => import('./features/food/food.component').then(m => m.FoodComponent)
  },
  {
    path: 'water',
    pathMatch: 'full',
    loadComponent: () => import('./features/water/water.component').then(m => m.WaterComponent)
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  }
];
