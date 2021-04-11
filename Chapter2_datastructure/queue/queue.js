class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.front = null; // dequeue 위치
    this.rear = null; // enqueue 위치
  }

  isEmpty() {
    return this.front === null;
  }

  peek() {
    return this.front;
  }

  enqueue(data) {
    const newNode = new Node(data);
    // 처음 넣는 값일 때
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length++;
      return newNode.data;
    }
    const enqueueNode = this.rear;
    enqueueNode.next = newNode;
    this.rear = newNode;
    this.length++;
    return enqueueNode.data;
  }

  dequeue() {
    // 큐가 비었을 때
    if (this.isEmpty()) {
      console.log("Queue underflow!");
      return false;
    }
    let dequeueNode = this.front;
    const returnData = dequeueNode.data;
    this.front = dequeueNode.next;
    dequeueNode = null;
    this.length--;
    return returnData;
  }
}

const init = () => {
  const queue = new Queue();
  console.log("연결리스트 기반의 큐를 구현해보자");

  for (let i = 1; i < 13; i = i + 2) {
    console.log(queue.enqueue(i));
  }

  console.log(queue.peek());

  for (let i = 1; i < 13; i = i + 2) {
    console.log(queue.dequeue());
  }
};

init();
