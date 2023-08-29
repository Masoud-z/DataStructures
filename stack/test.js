// class StackNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.size = 0;
//   }

//   push(val) {
//     if (this.size === 0) {
//       this.top = new StackNode(val);
//     } else {
//       const pushedNode = new StackNode(val);
//       pushedNode.next = this.top;
//       this.top = pushedNode;
//     }
//     this.size++;
//   }

//   getTop() {
//     return this.top.val;
//   }

//   pop() {
//     if (this.size === 0) return null;
//     const poppedNode = this.top;
//     this.top = this.top.next;
//     this.size--;
//     return poppedNode;
//   }
// }

// const newStack = new Stack();
// newStack.push("a");
// newStack.push("b");
// newStack.push("c");

// console.log(newStack.top);
// newStack.pop();
// console.log(newStack.top);

const result = [
  "B$u$i$ld",
  "$t$$h$e",
  "N$e$x$t",
  "E$$ra",
  "$$o$f$",
  "S$$of$t$wa$r$e",
  "De$$ve$l$op$me$n$t",
]
  .map((s) => s.replace(/\$/g, "").toUpperCase())
  .join(" ");
console.log(result);
