class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  first() {
    return this.head;
  }

  next(node) {
    return node.next;
  }

  prev(node) {
    return node.prev;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this.head.data;
    }

    const tailNode = this.tail;
    tailNode.next = newNode;
    this.tail = newNode;
    this.length++;

    return this.tail.data;
  }

  // 위치를 기준으로 제거하는 방법

  remove(position) {
    let count = 0;
    let current = this.head;
    let before;
    if (position === 0) {
      let removeNode = this.head;
      const removeData = current.data;
      removeNode.next = this.head;
      this.length--;
      removeNode = null;
      return removeData;
    } else {
      while (count < position) {
        before = current;
        count++;
        current = current.next;
      }
      let removeNode = current;
      const removeData = removeNode.data;
      removeNode.next = this.tail;
      removeNode = null;
      this.length--;
      return removeData;
    }
  }

  find(position) {
    let current = this.head;
    let count = 0;
    while (count < position) {
      current = current.next;
      count++;
    }
    return current.data;
  }
}

const init = () => {
  const doublyLinkedList = new DoublyLinkedList();
  console.log("양방향 연결리스트를 구현해보자.");
  console.log(doublyLinkedList.add(1));
  console.log(doublyLinkedList.add(2));
  console.log(doublyLinkedList.add(3));
  console.log(doublyLinkedList.length);
  console.log(doublyLinkedList.find(0));
  console.log(doublyLinkedList.find(2));
  console.log(doublyLinkedList.remove(0));
};

init();
