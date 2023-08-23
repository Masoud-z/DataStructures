function factorial(n) {
  if (n < 1) throw new Error("The number should be grater than 0");
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
