import assert from "node:assert/strict";
import test from "node:test";
import {
  isPalindrome,
  maxArea,
  moveZeroes,
  removeDuplicates,
  sortColors,
  threeSum,
} from "../practice/day05_array_practice.js";

test("removeDuplicates()", () => {
  let nums = [1, 1, 2];
  assert.equal(removeDuplicates(nums), 2);
  assert.deepEqual(nums.slice(0, 2), [1, 2]);

  let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  assert.equal(removeDuplicates(nums2), 5);
  assert.deepEqual(nums2.slice(0, 5), [0, 1, 2, 3, 4]);
});

test("threeSum()", () => {
  assert.deepEqual(threeSum([-1, 0, 1, 2, -1, -4]), [
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
  assert.deepEqual(threeSum([0, 1, 1]), []);
  assert.deepEqual(threeSum([0, 0, 0]), [[0, 0, 0]]);
});

test("maxArea() - Container With Most Water", () => {
  // Case 1: Standard example from LeetCode
  // Heights: [1,8,6,2,5,4,8,3,7] -> Max area is between 8 and 7 (index 1 and 8)
  // Width = 8 - 1 = 7. Height = min(8, 7) = 7. Area = 7 * 7 = 49.
  assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);

  // Case 2: Minimal array
  assert.equal(maxArea([1, 1]), 1);

  // Case 3: One very tall wall, but no width
  assert.equal(maxArea([1, 2, 1]), 2);

  // Case 4: Descending heights
  assert.equal(maxArea([4, 3, 2, 1]), 4); // index 0 and 1: min(4,3) * 1 = 3; index 0 and 2: min(4,2) * 2 = 4
});

test("isPalindrome()", () => {
  assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
  assert.equal(isPalindrome("race a car"), false);
  assert.equal(isPalindrome(" "), true); // An empty/whitespace string is a palindrome
  assert.equal(isPalindrome("0P"), false);
});

test("moveZeroes()", () => {
  let arr1 = [0, 1, 0, 3, 12];
  moveZeroes(arr1);
  assert.deepEqual(arr1, [1, 3, 12, 0, 0]);

  let arr2 = [0];
  moveZeroes(arr2);
  assert.deepEqual(arr2, [0]);

  let arr3 = [1, 2, 3];
  moveZeroes(arr3);
  assert.deepEqual(arr3, [1, 2, 3]); // No change needed
});

test("sortColors()", () => {
  let arr1 = [2, 0, 2, 1, 1, 0];
  sortColors(arr1);
  assert.deepEqual(arr1, [0, 0, 1, 1, 2, 2]);

  let arr2 = [2, 0, 1];
  sortColors(arr2);
  assert.deepEqual(arr2, [0, 1, 2]);

  let arr3 = [0];
  sortColors(arr3);
  assert.deepEqual(arr3, [0]);
});
