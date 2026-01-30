// day04_stacks_practice.js
// Practice problems for Day 04 — stacks
// Created: 2026-01-11
// Author: PC

import { Stack } from "../helpers/stack.js";

/*
Given a string containing only ()[]{}, determine if it’s valid.
A string is valid if:

open brackets are closed by the same type

open brackets are closed in the correct order

every closing bracket has a matching opening
*/
export function isValidParentheses(s) {
  const pairs = { "(": ")", "{": "}", "[": "]" };
  const st = new Stack();

  for (const ch of s) {
    if (pairs[ch]) {
      // opening bracket → push expected closer
      st.push(pairs[ch]);
    } else {
      // closing bracket → must match stack top
      if (st.isEmpty()) return false;

      const expected = st.pop();
      if (ch !== expected) return false;
    }
  }

  // stack must be empty at the end
  return st.isEmpty();
}

export function evalRPN(tokens) {
  // TODO
}

export function nextGreaterRight(nums) {
  // TODO
}

// Start here
function practice() {
  console.log("day04_stacks_practice.js ready");
}

practice();
