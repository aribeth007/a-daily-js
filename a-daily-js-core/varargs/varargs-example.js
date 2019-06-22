// simple function using arguments
function printSimple() {
	console.log.apply(null, arguments);
}

// simple arrow function using arguments  that won't work see below why
// https://stackoverflow.com/questions/41731854/why-do-arrow-functions-not-have-the-arguments-array
// const printSimpleArrow = () => {
// 	console.log.apply(null, arguuments);
// }

// simple arrow function using varargs es6 way
const printSimpleEs6 = (...args) => {
	console.log(...args);
}

// example of tests below
printSimple('Printing log using printSimple and I have another parameter. Here: ', { data : true });
// printSimpleArrow('Printing log using printSimpleArrow but I won\'t work.');
printSimpleEs6('Printing log using printSimpleEs6 and I don\'t look like a workaround anymore plus I have another parameter. Here: ', { data : true });

// using arguments.callee.. lets see.. but it's deprecated in es5 so don't use it
// I will add recursevely multiply from 1 to N
function multiply() {
   return function(n) {
      if (n <= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

const result = multiply()(5); 
printSimpleEs6('Here is my callee example result: ', result);

function otherMultiply(n) {
  if (n <= 1)
     return 1;
  return n * arguments.callee(n - 1);
}

const otherResult = otherMultiply(5); 
printSimple('Here is my other callee example result: ', otherResult);

const multiplyEs6 = (n) => {
  if (n <= 1)
     return 1;
  return n * multiplyEs6(n - 1);
}
const multiplyEs6Result = multiplyEs6(5);
printSimpleEs6('Here is my multiplyEs6 example result: ', multiplyEs6Result);
