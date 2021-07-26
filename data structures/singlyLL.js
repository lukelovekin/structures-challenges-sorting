// Singly linked list push, pop, traverse, shift, unshift, get, set, insert, remove, reverse
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // ,push,
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //   pop,
  pop() {
    if (!this.head) return undefined;
    let node = this.head;
    let newTail = node;
    while (node.next) {
      newTail = node;
      node = node.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return node;
  }

  // traverse,
  traverse() {
    let arr = [];
    //   go through list stop at tail
    let node = this.head;
    while (node.next) {
      console.log(node.val);
      arr.push(node);
      node = node.next;
    }
    arr.push(node);
    console.log(arr);
  }

  // shift,
  shift() {
    // head is the next value
    if (!this.head) return undefined;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    }
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return this;
  }

  // unshift,
  unshift(val) {
    //   add item to the front
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    }
    this.length++;
    return this;
  }

  // get,
  get(index) {
    //   takes index
    let count = 0;
    let current = this.head;
    if (index < 0 || index >= this.length) return null;
    if (this.length === 0) return null;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  // set,
  set(val, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
    }
    return false;
  }

  // insert,
  insert(val, index) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let next = prev.next;
    prev.next = newNode;
    newNode.next = next;
    this.length++;
    return this;
  }

  // remove,
  remove(index) {
    if (index < 0 || index > this.length - 1) return null;
    if (index === 0) return this.shift();
    let removeNext = this.get(index - 1);
    temp = removeNext.next;
    removeNext.next = temp.next;
    this.length--;
    return this;
  }

  // reverse
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new LinkedList();
list.push("hello");
list.push("again");
list.push("what");
list.insert("inserted", 2);
list.push("serious?");
list.remove(0);
console.log(list.unshift("from the front"));
console.log(list.get(4));
list.pop();
list.traverse();
console.log(list.shift());
console.log(list);


export {Node, LinkedList}