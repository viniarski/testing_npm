// implement the functions to pass as many of the tests in js-challenges.test.js as you can

export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function countLetters(a) {
  return a.length;
}

export function isAnagram(a, b) {
  const sorted_a = a.split('').slice().sort().join('');
  const sorted_b = b.split('').slice().sort().join('');
  return sorted_a === sorted_b;
}

// these are much much harder - it's a huge stretch goal, don't worry about getting these done.
export function isPalindrome() {
  // implement function
}

