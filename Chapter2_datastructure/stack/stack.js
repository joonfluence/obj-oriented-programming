class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.length = 0;
    this.top = null;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.length === 0;
  }

  pop() {
    if (this.top === null) {
      console.log("Stack underflow!!");
      return false;
    }

    let popNode = this.top;
    const popData = popNode.data;
    this.top = popNode.next;
    popNode = null;
    this.length--;
    return popData;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.top = newNode;
      this.length++;
      return newNode.data;
    }

    const nextNode = this.top;
    newNode.next = nextNode;
    this.top = newNode;
    this.length++;

    return newNode.data;
  }
}

const init = () => {
  const stack = new Stack();
  console.log("연결리스트 기반의 스택을 구현해보자");

  for (let i = 1; i < 13; i = i + 2) {
    console.log(stack.push(i));
  }

  console.log(stack.peek());

  for (let i = 1; i < 13; i = i + 2) {
    console.log(stack.pop());
  }
};

// init();
