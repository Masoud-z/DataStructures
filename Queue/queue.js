//---++What is a Queue?++---
//=> Collection of items
//=> Add to back of Queue (enqueue)
//=> Remove front of queue (dequeue)
//=> First-In-First-Out (FIFO)

//---++What is a Queue useful for?++---
//=>"First come, first serve" order
//=> Tracking requests for a limited resources
// => Graph algorithms

//---++Implement Queue with array++---
// const queue = [];
// queue.push("a");
// queue.push("b");
// queue.push("c");
// queue.push("d");
// console.log(queue);
// queue.shift();
// console.log(queue);

//---++Create Queue with Class++---

class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.back = null;
    }
    this.front = this.front.next;
    this.size--;
  }
}

const newQueue = new Queue();
newQueue.enqueue("a");
newQueue.enqueue("b");
newQueue.enqueue("c");
console.log(newQueue.front);
console.log(newQueue.back);
newQueue.dequeue();
console.log(newQueue.front);
