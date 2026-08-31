let num1 = 15;
let num2 = 5;

let sum = num1 + num2;
console.log(num1 + num2);
let difference = num1 - num2;
console.log(num1 - num2);
let product = num1 * num2;
console.log(num1 * num2);
let quotient = num1 / num2;
console.log(num1 / num2);
let reminder = num1 % num2;
console.log(num1 % num2);
let incrementedNum = num1;
incrementedNum++; // Postfix increment
console.log(`Increment (postfix): ${num1}++ results in ${incrementedNum}`);

let prefixIncrementedNum = num2;
++prefixIncrementedNum; // Prefix increment
console.log(`Increment (prefix): ++${num2} results in ${prefixIncrementedNum}`);

// Decrement
let decrementedNum = num1;
decrementedNum--; // Postfix decrement
console.log(`Decrement (postfix): ${num1}-- results in ${decrementedNum}`);

let prefixDecrementedNum = num2;
--prefixDecrementedNum; // Prefix decrement
console.log(`Decrement (prefix): --${num2} results in ${prefixDecrementedNum}`);

// Exponentiation
let power = num1 ** 2; // num1 raised to the power of 2
console.log(`Exponentiation: ${num1} ** 2 = ${power}`);