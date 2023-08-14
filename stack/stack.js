//--++What is a Stack?++--
//=> Collection of items
//=> add to top of stack (push)
//=> remove top of stack (pop)
//=> Last-In-First-Out(LIFO)

//--++What is a Stack useful for?++--
//=> tracking a history of steps
//=> browser history
//=> backtracking algorithms

//--++Create a stack using an array++--
const myStack = [];

myStack.push("a");
myStack.push("b");
myStack.push("c");
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.push("c");
myStack.push("d");
console.log(myStack);

console.log("---++Array Finished++---");

//--++Create stack with class++--

class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val);
    } else {
      const pushedNode = new StackNode(val);
      pushedNode.next = this.top;
      this.top = pushedNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return poppedNode.val;
  }

  getTop() {
    return this.top.val;
  }
}

const myClassStack = new Stack();
myClassStack.push("a");
myClassStack.push("b");
myClassStack.push("c");
console.log(myClassStack.top);
console.log(myClassStack.size);
console.log(myClassStack.getTop());
console.log(myClassStack.pop());
console.log(myClassStack.size);
console.log(myClassStack.pop());
console.log(myClassStack.pop());
console.log(myClassStack.pop());
console.log(myClassStack.size);
