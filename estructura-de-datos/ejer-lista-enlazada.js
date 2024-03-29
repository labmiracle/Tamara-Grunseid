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

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  invert() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  deleteDups() {
    let current = this.head;

    while (current) {
      let runner = current;
      while (runner.next) {
        if (runner.next.data === current.data) {
          runner.next = runner.next.next;
          this.size--;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }
}

class DoubleNode extends Node {
  constructor(data, prev = null, next = null) {
    super(data, next);
    this.prev = prev;
  }
}

class DoubleLinkedList extends LinkedList {
  constructor() {
    super();
  }

  add(data) {
    let node = new DoublyNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
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
    if (current.next) {
      current.next.prev = previous;
    }
    this.size--;
  }
}
