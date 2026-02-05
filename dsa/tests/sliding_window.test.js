import { strict as assert } from "node:assert";
import test from "node:test";

import {
  lengthOfLongestSubstring,
  maxSumSubarray,
  minSubArrayLen,
} from "../practice/day09_sliding_window_practice.js";

test("maxSumSubarray()", () => {
  assert.equal(maxSumSubarray([2, 1, 5, 1, 3, 2], 3), 9);
  assert.equal(maxSumSubarray([2, 3, 4, 1, 5], 2), 7); // [3, 4]
});

test("minSubArrayLen()", () => {
  assert.equal(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2); // [4, 3]
  assert.equal(minSubArrayLen(4, [1, 4, 4]), 1); // [4]
  assert.equal(minSubArrayLen(11, [1, 1, 1, 1]), 0); // Not found
});

test("lengthOfLongestSubstring()", () => {
  assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);
  assert.equal(lengthOfLongestSubstring("bbbbb"), 1);
  assert.equal(lengthOfLongestSubstring("pwwkew"), 3); // "wke"
  assert.equal(lengthOfLongestSubstring(""), 0);
});
