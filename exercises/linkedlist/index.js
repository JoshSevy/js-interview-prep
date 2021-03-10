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

  size() {
    let count = 0;
    let currentHead = this.head;
    while (currentHead !== null) {
      count++;
      currentHead = currentHead.next;
    }
    return count;
  }

  insertFirst(data) {
    let currentHead = this.head
    if(!currentHead) {
      this.head = new Node(data);
    } else {
      this.head = new Node(data, currentHead);
    }
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;

  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentHead = this.head;
    if (!currentHead) return null;
    while (currentHead.next !== null) {
      currentHead = currentHead.next
    }
    return currentHead;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    return null;
  }

  removeFirst() {
    if (this.head.next) {
      const newHead = this.head.next;
      this.head = null;
      this.head = newHead;
    } else {
      this.head = null;
    }
  }

  removeLast() {
    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next !== null) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
    }

    const previousNode = this.getAt(index - 1);

    if (!previousNode || !previousNode.next) return;

    previousNode.next = previousNode.next.next;

  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while(node) {
      fn(node,counter);
      node = node.next;
      counter++
    }
  }

  clear() {
    this.head = null;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
