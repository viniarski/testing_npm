import { expect, test } from "vitest";

import {
  sum,
  subtract,
  multiply,
  divide,
  isPalindrome,
  isAnagram,
  countLetters,
} from "./challenge";

test("sum", function () {
  const expected = 7;
  const actual = sum(3, 4);

  expect(actual).toBe(expected);
});

test("substract", function () {
  const expected = 3;
  const actual = subtract(7, 4);

  expect(actual).toBe(expected);
});

test("multiply", function () {
  const expected = 10;
  const actual = multiply(2, 5);

  expect(actual).toBe(expected);
});

test("divide", function () {
  const expected = 2;
  const actual = divide(10, 5);

  expect(actual).toBe(expected);
});

test("countLetters", function () {
  const expected = 5;
  const actual = countLetters("miami")

  expect(actual).toBe(expected)
});

test("isAnagram", function () {
  const expected = true;
  const actual = isAnagram("cat", "tac")

  expect(actual).toBe(expected)
})

test('isPalindrome', function () {
  const expected = true;
  const actual = isPalindrome('kayak')

  expect(actual).toBe(expected)
})