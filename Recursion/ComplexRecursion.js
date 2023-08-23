function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));

function combinations(array) {
  if (array.length === 0) return [[]];
  const firstEl = array[0];
  const rest = array.slice(1);

  const combsWithoutFirstEL = combinations(rest);
  const combsWithFirstEL = [];

  combsWithoutFirstEL.forEach((comb) => {
    const combWithFirst = [...comb, firstEl];
    combsWithFirstEL.push(combWithFirst);
  });
  return [...combsWithFirstEL, ...combsWithoutFirstEL];
}

console.log(combinations(["a", "b", "c"]));
