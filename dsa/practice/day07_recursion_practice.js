// day07_recursion_practice.js
// Practice problems for Day 07 — recursion
// Created: 2026-01-30
// Author: PC
/**
 * Problem 1: Factorial
 */
export function factorial(n) {
  // [YOUR CODE HERE]
  // 1. Base Case: If n is 1 (or 0), return 1.
  if (n <= 1) {
    return 1;
  }
  // 2. Recursive Step: Return n * factorial(n - 1)
  return n * factorial(n - 1);
}

/**
 * Problem 2: Fibonacci
 */
export function fib(n) {
  // [YOUR CODE HERE]
  // 1. Base Case: Check if n is 0 or 1.
  if (n <= 1) return n;
  // 2. Recursive Step: Return fib(n-1) + fib(n-2)
  return fib(n - 1) + fib(n - 2);
}

/**
 * Problem 3: Power
 */
export function power(base, exponent) {
  // [YOUR CODE HERE]

  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

/**
 * Problem 4: Sum of Array
 * Pattern: Head & Tail
 */
export function arraySum(nums) {
  // 1. Base Case: If array is empty, sum is 0
  if (nums.length === 0) {
    return 0;
  }

  // 2. Recursive Step
  // Take the first number (nums[0]) and add it to the sum of the rest (nums.slice(1))
  const head = nums[0];
  const tail = nums.slice(1);

  // [YOUR CODE HERE]
  return head + arraySum(tail);
}

/**
 * Problem 5: Reverse String
 * Pattern: Move Head to End
 */
export function reverseString(str) {
  // 1. Base Case: Empty string returns empty string
  if (str === "") {
    return "";
  }

  // 2. Recursive Step
  // Take the first char (str[0])
  const firstChar = str[0];
  // Take the rest (str.slice(1))
  const remainingChar = str.slice(1);
  // Return: (Rest Reversed) + (First Char)
  return reverseString(remainingChar) + firstChar;
}

/**
 * Problem 6: Palindrome
 * Pattern: Peeling the Onion (First vs Last)
 */
export function isPalindrome(str) {
  // 1. Base Case: If length is 0 or 1, it's a palindrome.
  if (str.length <= 1) {
    return true;
  }

  const head = str[0];
  const tail = str[str.length - 1];

  // 2. recursive Step
  // Check if First (str[0]) matches Last (str[str.length - 1])
  if (head === tail) {
    // IF they match -> return isPalindrome(middle_part)
    return isPalindrome(str.slice(1, -1));
  }
  // IF they don't -> return false
  return false;
}

/**
 * Problem 7: Flatten Array
 * Pattern: Tree Traversal (Handling nested items)
 */
export function flatten(arr) {
  let result = [];

  for (const item of arr) {
    // Check if 'item' is an array
    if (Array.isArray(item)) {
      // RECURSION: It's an array! Flatten it and combine results.
      const nested = flatten(item);
      result = result.concat(nested);
    } else {
      // BASE CASE: It's just a number. Add it.
      result.push(item);
    }
  }

  return result;
}

// Start here
function practice() {
  console.log("day07_recursion_practice.js ready");
}

practice();
