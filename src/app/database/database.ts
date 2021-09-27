import { IWorkout } from '../Interfaces';
import { Observable } from '../utils/Observable';
import { DatabaseObject } from './database-object';

interface IDatabase {
  workouts: IWorkout[];
}

/**
 * Default values for the database if the file doesn't exist
 */
const defaultDatabase: IDatabase = {
  workouts: [],
};

/**
 * Singleton object that gives access to the database file
 */
export const Database = new (class extends DatabaseObject<IDatabase> {
  public observable: Observable<DatabaseObject<IDatabase>>;

  public constructor() {
    let data: IDatabase;

    if (!localStorage.getItem('database')) {
      localStorage.setItem('database', JSON.stringify(defaultDatabase));
      data = JSON.parse(JSON.stringify(defaultDatabase));
    } else {
      data = JSON.parse(localStorage.getItem('database'));
    }

    super(data, null);

    this.observable = new Observable(this);
  }

  public update() {
    localStorage.setItem('database', JSON.stringify(this.rawData));
    this.observable.notify();
  }
})();
