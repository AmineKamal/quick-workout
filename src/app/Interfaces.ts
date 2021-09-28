export interface IWorkout {
    name: string;
    id: string;
    exercices: IExercice[];
  }
  
  export interface IExercice {
    name: string;
    sets: number;
    reps: number;
  }
  