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
  let sorted_a = a.split('').sort().join('');
  let sorted_b = b.split('').sort().join('');
  return sorted_a === sorted_b;
}

export function isPalindrome(a) {
  let pali = a.split('').join()
  let reversePali = a.split('').reverse().join()
  return pali == reversePali
}
