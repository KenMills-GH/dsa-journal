import assert from "node:assert/strict";
import test from "node:test";

import { MinStack, Stack } from "../helpers/stack.js";
import {
  isValidParentheses,
  RecentCounter,
} from "../practice/day04_stacks_practice.js";

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

test("RecentCounter()", () => {
  const counter = new RecentCounter();
  assert.equal(counter.ping(1), 1); // queue is [1], range is [-2999, 1]
  assert.equal(counter.ping(100), 2); // queue is [1, 100], range is [-2900, 100]
  assert.equal(counter.ping(3001), 3); // queue is [1, 100, 3001], range is [1, 3001]
  assert.equal(counter.ping(3002), 3); // queue is [100, 3001, 3002], 1 is evicted
});
