export class Observable<T> {
  private subscribers: Array<(v: T) => void> = [];

  public constructor(private value: T) {}

  public subscribe(s: (v: T) => void) {
    this.subscribers.push(s);
  }

  public update(v: T) {
    this.value = v;
    this.notify();
  }

  public notify() {
    this.subscribers.forEach((s) => s(this.value));
  }
}
