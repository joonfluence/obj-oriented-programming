export class arraylist {
  constructor() {
    this.array = [];
    this.length = 0;
  }

  get length() {
    return this._length;
  }

  increase() {
    return this._length + 1;
  }

  decrease() {
    return this._length - 1;
  }

  push(data) {
    return this.array.push(data);
  }

  poo() {
    return this.array.pop();
  }

  get(idx) {
    return this.array[idx];
  }
}
