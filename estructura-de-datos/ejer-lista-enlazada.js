class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  remove(value) {
    let current = this.head;
    if (!current) {
      return;
    }
    let previous;
    while (current && current.data !== value) {
      previous = current;
      current = current.next;
    }
    if (!current) {
      return;
    }
    if (!previous) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }
    this.size--;
  }
}
