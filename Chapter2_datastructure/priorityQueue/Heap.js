export class Heap extends arrayList {
  constructor(data = null) {
    super(); // this.array = [], this.length = 0;
    this.index = 1;
    super.array[index] = data;
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
      if (super.array[this.getLChildIndex] < super.array[this.getRChildIndex]) {
        return this.getRChildIndex(idx);
      } else {
        return this.getLChildIndex(idx);
      }
    }
  }

  swap(indexA, indexB) {
    let temp = super.array[indexA];
    super.array[indexA] = super.array[indexB];
    super.array[indexB] = temp;
  }

  Insert(data) {
    // ① 가장 마지막 노드의 위치에 값을 추가한다.
    const newData = super.array.push(data);
    let idx = super.length();
    let parentIndex = this.getParentIndex(idx);

    // ② 부모노드와 추가된 노드의 값(우선순위)을 비교해, 우선순위가 더 높을 때까지 계속 값을 변경한다.
    while (super.array[parentIndex] < super.array[idx]) {
      this.swap(this.getParentIndex(idx), super.array[idx]);
      parenIndex = this.getParentIndex(parentIndex);
      idx = this.getParentIndex(idx);
    }

    return newData;
  }

  Delete() {
    const returnData = super.array[rootIdx];
    const deleteData = returnData;
    let rootIdx = 1;
    // ① 루트 노드를 삭제한다.
    super.array[rootIdx] = null;

    // ② 가장 마지막 노드를 루트 노드에 둔다.
    super.array[rootIdx] = super.array[super.length()];

    let childIdx = this.getHiPriChildIndex(rootIdx);
    // ③ 자식 노드의 우선순위가 더 낮아질 때까지 값을 변경한다.
    while (super.array[childIdx] > super.array[rootIdx]) {
      this.swap(super.array[childIdx], super.array[rootIdx]);
      childIdx = this.getHiPriChildIndex(childIdx);
      rootIdx = this.getHiPriChildIndex(rootIdx);
    }

    return deleteData;
  }
}

const init = () => {};

init();
