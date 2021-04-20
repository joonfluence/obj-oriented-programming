export class Heap extends arrayList {
  constructor(data = null) {
    super(); // this.array = [], this.length = 0;
    this.index = 1;
    this.root[index] = data;
  }

  isEmpty() {
    return this.length === 0;
  }

  getParentIndex(idx) {
    return idx % 2 === 0 ? idx / 2 : idx / 2 - 1;
  }

  getLChildIndex(idx) {
    return idx * 2;
  }

  getRChildIndex(idx) {
    return idx * 2 + 1;
  }

  getHiPriChildIndex(idx) {
    // 자식노드가 없는 경우 : 해당 인덱스의 왼쪽 자식의 값이 총 길이보다 클 때
    if (this.getLChildIndex(idx) > this.length) {
      return 0;
      // 자식노드가 1개 있는 경우 : 왼쪽 자식 노드의 인덱스를 반환함
    } else if (this.getLChildIndex(idx) === this.length) {
      return this.getLChildIndex(idx);
      // 자식노드가 2개 있는 경우, 우선순위가 더 높은 값의 인덱스를 반환해준다.
    } else {
      if (this.array[this.getLChildIndex] < this.array[this.getRChildIndex]) {
        return this.getRChildIndex(idx);
      } else {
        return this.getLChildIndex(idx);
      }
    }
  }

  Insert() {}

  Delete() {}
}
