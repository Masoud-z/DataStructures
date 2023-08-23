function factorial(n) {
  if (n < 1) throw new Error("The number should be grater than 0");
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

function sum(array) {
  if (array.length === 0) return 0;
  const rest = array.slice(1);
  return array[0] + sum(rest);
}

// console.log(sum([]));
// console.log(sum([1]));
// console.log(sum([1, 2]));
// console.log(sum([1, 2, 3]));
// console.log(sum([1, 2, 3, 4]));
// console.log(sum([1, 2, 3, 4, 5]));
