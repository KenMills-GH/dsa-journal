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

/**
 * Problem 2: Number of Recent Calls
 * Pattern: Queue (FIFO)
 */
export class RecentCounter {
  constructor() {
    // Our queue to hold the timestamps of all recent pings
    this.queue = [];
  }

  ping(t) {
    // 1. Add the new ping's timestamp to the back of the line
    this.queue.push(t);

    // 2. Check the person at the front of the line (index 0).
    // If their timestamp is older than the 3000ms window, kick them out.
    // We keep doing this until the person at the front is within the window.
    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }

    // 3. The queue now only contains valid pings within the last 3000ms.
    return this.queue.length;
  }
}

// Start here
function practice() {
  console.log("day04_stacks_practice.js ready");
}

practice();
