import { strict as assert } from "node:assert";
import test from "node:test";

import {
  isPalindrome,
  maxArea,
  moveZeroes,
  removeDuplicates,
  twoSumSorted,
} from "../practice/day08_more_two_pointer_practice.js";

test("isPalindrome()", () => {
  assert.equal(isPalindrome("racecar"), true);
  assert.equal(isPalindrome("hello"), false);
  assert.equal(isPalindrome("madam"), true);
  assert.equal(isPalindrome(""), true);
});

test("twoSumSorted()", () => {
  assert.deepEqual(twoSumSorted([2, 7, 11, 15], 9), [2, 7]);
  assert.deepEqual(twoSumSorted([1, 2, 3, 4, 6], 6), [2, 4]); // 2+4=6
  assert.deepEqual(twoSumSorted([1, 2, 3], 10), []); // No match
});

test("removeDuplicates()", () => {
  // We test the RETURN value (length) AND the array mutation

  let nums1 = [1, 1, 2];
  let k1 = removeDuplicates(nums1);
  assert.equal(k1, 2);
  assert.deepEqual(nums1.slice(0, 2), [1, 2]);

  let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  let k2 = removeDuplicates(nums2);
  assert.equal(k2, 5);
  assert.deepEqual(nums2.slice(0, 5), [0, 1, 2, 3, 4]);
});

test("moveZeroes()", () => {
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  assert.deepEqual(nums, [1, 3, 12, 0, 0]);

  let nums2 = [0, 0, 1];
  moveZeroes(nums2);
  assert.deepEqual(nums2, [1, 0, 0]);
});

test("maxArea()", () => {
  assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
  assert.equal(maxArea([1, 1]), 1);
});
