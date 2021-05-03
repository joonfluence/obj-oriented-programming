import { arraylist } from "../arraylist/array.js";

export class Heap extends arraylist {
  constructor() {
    super();
    this.array[0] = null;
  }

  isEmpty() {
    return this.length === 0;
  }

  getParentIndex(idx) {
    if (idx === 1) {
      return;
    }
    return idx % 2 === 0 ? idx / 2 : (idx - 1) / 2;
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
      return false;
      // 자식노드가 1개 있는 경우 : 왼쪽 자식 노드의 인덱스를 반환함
    } else if (this.getLChildIndex(idx) === this.length) {
      return this.getLChildIndex(idx);
      // 자식노드가 2개 있는 경우, 우선순위가 더 높은 값의 인덱스를 반환해준다.
    } else {
      if (
        this.array[this.getLChildIndex(idx)] <
        this.array[this.getRChildIndex(idx)]
      ) {
        return this.getLChildIndex(idx);
      } else {
        return this.getRChildIndex(idx);
      }
    }
  }

  swap(indexA, indexB) {
    let temp = this.array[indexA];
    this.array[indexA] = this.array[indexB];
    this.array[indexB] = temp;
  }

  Insert(data) {
    // ① 가장 마지막 노드의 위치에 값을 추가한다.
    if (this.array.length === 1) {
      super.push(data);
      return this.array[this.array.length - 1];
    }
    super.push(data);
    let idx = this.length;
    let parentIndex = this.getParentIndex(idx);

    // ② 부모노드와 추가된 노드의 값(우선순위)을 비교해, 우선순위가 더 높을 때까지 계속 값을 변경한다. 값이 작으면 우선순위가 높은 것임을 유의하자. 따라서 그에 반대되는 조건일 경우, 값을 비교하여 swap 해주면 된다.

    while (this.array[parentIndex] > this.array[idx]) {
      this.swap(this.getParentIndex(idx), idx);
      const newParenIndex = this.getParentIndex(parentIndex);
      parentIndex = newParenIndex;
      idx = this.getParentIndex(idx);
    }

    return this.array[idx];
  }

  Delete() {
    let parentIdx = 1;
    // ① 루트 노드를 삭제한다.
    const returnData = this.array[parentIdx];

    // ② 가장 마지막 노드를 루트 노드에 둔다.
    this.array[parentIdx] = super.pop();

    let childIdx = this.getHiPriChildIndex(parentIdx);
    // ③ 자식 노드의 우선순위가 더 낮아질 때까지 값을 변경한다.
    while (childIdx) {
      this.swap(childIdx, parentIdx);
      parentIdx = childIdx;
      childIdx = this.getHiPriChildIndex(childIdx);
    }

    return returnData;
  }

  sort(array) {
    for (let i = 0; i < array.length; i++) {
      this.Insert(array[i]);
    }

    while (!this.isEmpty()) {
      console.log(this.Delete());
      // this.Delete();
    }
  }
}

const init = () => {
  const arr = [3, 4, 2, 1, 6, 8, 5, 10, 12];
  const hp = new Heap();
  hp.Insert(4);
  hp.Insert(2);
  hp.Insert(8);
  hp.Insert(6);
  hp.Insert(10);
  hp.Insert(3);
  hp.Insert(1);
  hp.sort(arr);
};

// init();
