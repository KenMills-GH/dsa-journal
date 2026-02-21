// day11_more_linked_list_practice.js
// Practice problems for Day 11 — More Linked List
// Created: 2026-02-19
// Author: PC

/**
 * Problem 1: Valid Parentheses
 * Pattern: Stack (LIFO)
 */
export function isValid(s) {
  const stack = [];

  // A helpful map to check matching pairs instantly
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // [YOUR CODE HERE]

    // 1. If 'char' is an OPENING bracket (it is NOT a key in our 'pairs' object):
    //    - Push it onto the stack.

    // 2. Else (it IS a closing bracket):
    //    - Pop the top element off the stack.
    //    - Check if the popped element matches the correct opening bracket for 'char'
    //      (using pairs[char]).
    //    - If it doesn't match, return false.
  }

  // 3. At the end, if the stack is empty, return true. Otherwise, return false.
  return stack.length === 0;
}

// Start here
function practice() {
  console.log("day11_more_linked_list_practice.js ready");
}

practice();
