import { strict as assert } from "node:assert";
import test from "node:test";
import {
  arraySum,
  factorial,
  fib,
  flatten,
  isPalindrome,
  power,
  reverseString,
} from "../practice/day07_recursion_practice.js";

test("factorial()", () => {
  assert.equal(factorial(1), 1); // Base case
  assert.equal(factorial(2), 2); // 2 * 1
  assert.equal(factorial(3), 6); // 3 * 2 * 1
  assert.equal(factorial(5), 120);
});

test("fib()", () => {
  assert.equal(fib(0), 0);
  assert.equal(fib(1), 1);
  assert.equal(fib(2), 1); // 1 + 0
  assert.equal(fib(3), 2); // 1 + 1
  assert.equal(fib(4), 3); // 2 + 1
  assert.equal(fib(6), 8); // 5 + 3
});

test("power()", () => {
  assert.equal(power(2, 0), 1);
  assert.equal(power(2, 1), 2);
  assert.equal(power(2, 3), 8);
  assert.equal(power(5, 2), 25);
});

test("arraySum()", () => {
  assert.equal(arraySum([1, 2, 3]), 6);
  assert.equal(arraySum([5, 10, 15]), 30);
  assert.equal(arraySum([]), 0); // Base case
});

test("reverseString()", () => {
  assert.equal(reverseString("hello"), "olleh");
  assert.equal(reverseString("abc"), "cba");
  assert.equal(reverseString(""), "");
});

test("isPalindrome()", () => {
  assert.equal(isPalindrome("racecar"), true);
  assert.equal(isPalindrome("madam"), true);
  assert.equal(isPalindrome("hello"), false);
  assert.equal(isPalindrome("a"), true); // Single letter is always true
  assert.equal(isPalindrome(""), true); // Empty is always true
});

test("flatten()", () => {
  assert.deepEqual(flatten([1, [2, 3], 4]), [1, 2, 3, 4]);
  assert.deepEqual(flatten([[1, [2]], 3]), [1, 2, 3]);
  assert.deepEqual(flatten([]), []);
});
