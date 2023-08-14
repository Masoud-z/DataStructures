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

