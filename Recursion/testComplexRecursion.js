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

function combination(elements) {
  if (elements.length === 0) return [[]];
  const firstEl = elements[0];
  const rest = elements.slice(1);
  const combsWithoutFirstEL = combination(rest);
  const combsWithFirstEL = [];

  combsWithoutFirstEL.forEach((element) => {
    const combWithFirstEl = [...element, firstEl];
    combsWithFirstEL.push(combWithFirstEl);
  });

  return [...combsWithoutFirstEL, ...combsWithFirstEL];
}

console.log(combination(["a", "b", "c"]));
console.log("                                    ");
console.log("-----------------++++-----------------");
console.log("                                    ");
console.log(combination(["a", "b"]));
console.log("                                    ");
console.log("-----------------++++-----------------");
console.log("                                    ");
console.log(combination(["a"]));
console.log("                                    ");
console.log("-----------------++++-----------------");
console.log("                                    ");
console.log(combination([]));
combination(["a", "b", "c"]);


