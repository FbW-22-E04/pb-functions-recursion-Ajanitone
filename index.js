// # Recursion

// #### Calculate the sum of natural number up to n
// * Write a JavaScript program to compute the sum of an array of integers

const array = [1, 2, 3, 4, 5, 6];

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + sum(arr);
}

console.log("Q1: The sum is", sum(array)); // return 21

console.log("-------------------------------------------------------------");
