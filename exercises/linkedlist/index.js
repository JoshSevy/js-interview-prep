// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
  this.head = null;
  }

  insertFirst(data) {
    let currentHead = this.head
    if(!currentHead) {
      this.head = new Node(data);
    } else {
      this.head = new Node(data, currentHead);
    }
  }

  size() {
    let count = 0;
    let currentHead = this.head;
    while (currentHead !== null) {
      count++;
      currentHead = currentHead.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentHead = this.head;
    while (currentHead.next !== null) {
      currentHead = currentHead.next
    }
    return currentHead;
  }
}

module.exports = { Node, LinkedList };
