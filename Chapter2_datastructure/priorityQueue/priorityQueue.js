import { Heap } from "./Heap.js";

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  PQIsEmpty() {
    return super.isEmpty();
  }
  PEnqueue(data) {
    super.Insert(data);
  }
  PDequeue() {
    return super.Delete();
  }
}

const init = () => {
  const PQ = new PriorityQueue();
  PQ.Insert(3);
  PQ.Insert(2);
  PQ.Insert(5);
  PQ.Insert(7);

  for (let i = 1; i < PQ.array.length; i++) {
    process.stdout.write(PQ.array[i] + " ");
  }
};

init();
