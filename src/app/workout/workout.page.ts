import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Database } from '../database/database';
import { IWorkout } from '../Interfaces';

@Component({
  selector: 'app-workout',
  templateUrl: 'workout.page.html',
  styleUrls: ['workout.page.scss'],
})
export class WorkoutPage implements OnInit {
  public workout: IWorkout;
  public currentIndex = 0;
  public currentGradientIndex = 0;
  public gradients = [
    'linear-gradient(to right, #1e3c72, #2a5298)',
    'linear-gradient(to right, #114357, #f29492)',
    'linear-gradient(to right, #6a3093, #a044ff)',
    'linear-gradient(to right, #457fca, #5691c8)',
    'linear-gradient(to right, #673ab7, #512da8)',
    'linear-gradient(to right, #005c97, #363795)',
    'linear-gradient(to right, #2c3e50, #3498db)',
    'linear-gradient(to right, #525252, #3d72b4)',
    'linear-gradient(to right, #136a8a, #267871)',
    'linear-gradient(to right, #6441a5, #2a0845)',
    'linear-gradient(to right, #360033, #0b8793)',
  ];

  constructor(private aroute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.aroute.params.subscribe((params: Params) => {
      const workoutId = params['id'];
      this.workout = Database.get('workouts').rawData.find(
        (w) => w.id === workoutId
      );
      this.currentIndex = 0;
      this.currentGradientIndex = 0;
      this.shuffleArray(this.gradients);
    });
  }

  next() {
    this.currentIndex = Math.min(
      this.currentIndex + 1,
      this.workout.exercices.length - 1
    );

    this.currentGradientIndex = Math.min(
      this.currentGradientIndex + 1,
      this.workout.exercices.length - 1,
      this.gradients.length - 1
    );
  }

  prev() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.currentGradientIndex = Math.max(this.currentGradientIndex - 1, 0);
  }

  shuffleArray(array: any[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  back() {
    this.router.navigate(['tabs/workouts']);
  }
}
