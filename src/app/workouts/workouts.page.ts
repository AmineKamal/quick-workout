import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Database } from '../database/database';
import { IWorkout } from '../Interfaces';

@Component({
  selector: 'app-workouts',
  templateUrl: 'workouts.page.html',
  styleUrls: ['workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  workouts: IWorkout[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    Database.observable.subscribe((v) => {
      this.workouts = v.get('workouts').rawData;
    });

    this.workouts = Database.get('workouts').rawData;
  }

  uploadNewWorkout() {
    this.router.navigate(['upload']);
  }

  selectWorkout(id: string) {
    this.router.navigate(['workout', id]);
  }

  deleteWorkout(index: number) 
  {
    Database.get("workouts").splice(index, 1);
  }
}
