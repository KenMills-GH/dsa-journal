import assert from "node:assert/strict";
import test from "node:test";

import { MinStack, Stack } from "../helpers/stack.js";
import { isValidParentheses } from "../practice/day04_stacks_practice.js";

test("Stack basics", () => {
  const st = new Stack();
  assert.equal(st.isEmpty(), true);
  assert.equal(st.size(), 0);
  assert.equal(st.pop(), null);
  assert.equal(st.peek(), null);

  st.push(10);
  st.push(20);
  assert.equal(st.peek(), 20);
  assert.equal(st.size(), 2);
  assert.equal(st.isEmpty(), false);

  assert.equal(st.pop(), 20);
  assert.equal(st.pop(), 10);
  assert.equal(st.pop(), null);
});

test("isValidParentheses()", () => {
  assert.equal(isValidParentheses(""), true);
  assert.equal(isValidParentheses("()"), true);
  assert.equal(isValidParentheses("()[]{}"), true);
  assert.equal(isValidParentheses("(]"), false);
  assert.equal(isValidParentheses("([)]"), false);
  assert.equal(isValidParentheses("{[]}"), true);
  assert.equal(isValidParentheses("((("), false);
});

test("MinStack", () => {
  const ms = new MinStack();
  assert.equal(ms.pop(), null);
  assert.equal(ms.top(), null);
  assert.equal(ms.getMin(), null);

  ms.push(-2);
  ms.push(0);
  ms.push(-3);
  assert.equal(ms.getMin(), -3);

  assert.equal(ms.pop(), -3);
  assert.equal(ms.top(), 0);
  assert.equal(ms.getMin(), -2);
});

// test("evalRPN()", () => {
//   assert.equal(evalRPN(["2", "1", "+", "3", "*"]), 9);
//   assert.equal(evalRPN(["4", "13", "5", "/", "+"]), 6);
//   assert.equal(
//     evalRPN([
//       "10",
//       "6",
//       "9",
//       "3",
//       "+",
//       "-11",
//       "*",
//       "/",
//       "*",
//       "17",
//       "+",
//       "5",
//       "+",
//     ]),
//     22
//   );
// });

// test("nextGreaterRight()", () => {
//   assert.deepEqual(nextGreaterRight([]), []);
//   assert.deepEqual(nextGreaterRight([1]), [-1]);
//   assert.deepEqual(nextGreaterRight([2, 1, 2, 4, 3]), [4, 2, 4, -1, -1]);
//   assert.deepEqual(nextGreaterRight([5, 4, 3, 2, 1]), [-1, -1, -1, -1, -1]);
//   assert.deepEqual(nextGreaterRight([1, 2, 3, 4, 5]), [2, 3, 4, 5, -1]);
// });
