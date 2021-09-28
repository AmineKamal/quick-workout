import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Database } from '../database/database';
import { IWorkout } from '../Interfaces';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.page.html',
  styleUrls: ['upload.page.scss'],
})
export class UploadPage {
  constructor(private router: Router) {}
  workout: IWorkout = { name: '', id: this.uuidv4(), exercices: [] };

  addExercice() {
    this.workout.exercices.push({ name: '', sets: null, reps: null });
  }

  submit() {
    this.workout.exercices = this.workout.exercices.filter(
      (ex) => ex.name !== ''
    );

    if (this.workout.name === '' || this.workout.exercices.length === 0) return;

    Database.get('workouts').push(this.workout);
    this.back();
  }

  back() {
    this.router.navigate(['tabs/workouts']);
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
}
