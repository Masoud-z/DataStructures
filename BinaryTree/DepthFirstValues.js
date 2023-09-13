class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const depthFirstValue = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(depthFirstValue(a));

const newDepthFirstValue = (root) => {
  if (root === null) return [];
  const leftValues = newDepthFirstValue(root.left);
  const rightValues = newDepthFirstValue(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

console.log(newDepthFirstValue(a));