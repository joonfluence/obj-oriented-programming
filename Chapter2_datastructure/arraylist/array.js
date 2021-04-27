export class arraylist {
  constructor() {
    this.array = [];
    this.length = 0;
  }

  get length() {
    return this._length;
  }

  set length(num) {
    this._length = num;
  }

  increase() {
    return ++this._length;
  }

  decrease() {
    return --this._length;
  }

  push(data) {
    this.increase();
    return this.array.push(data);
  }

  pop() {
    this.decrease();
    return this.array.pop();
  }

  get(idx) {
    return this.array[idx];
  }
}
