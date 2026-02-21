import assert from "node:assert/strict";
import test from "node:test";
import {
  binarySearch,
  firstBadVersion,
  searchInsert,
  searchMatrix,
} from "../practice/day10_binary_search_practice.js";

test("binarySearch()", () => {
  assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
  assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1); // 2 is not in array
  assert.equal(binarySearch([5], 5), 0);
});

test("searchInsert()", () => {
  assert.equal(searchInsert([1, 3, 5, 6], 5), 2);
  assert.equal(searchInsert([1, 3, 5, 6], 2), 1);
  assert.equal(searchInsert([1, 3, 5, 6], 7), 4);
  assert.equal(searchInsert([1, 3, 5, 6], 0), 0);
});

test("firstBadVersion()", () => {
  // Simulated API: Returns true if version >= 4
  const isBad4 = (v) => v >= 4;
  assert.equal(firstBadVersion(5, isBad4), 4);

  // Simulated API: Returns true if version >= 1
  const isBad1 = (v) => v >= 1;
  assert.equal(firstBadVersion(1, isBad1), 1);
});

test("searchMatrix()", () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  assert.equal(searchMatrix(matrix, 3), true);
  assert.equal(searchMatrix(matrix, 13), false);
  assert.equal(searchMatrix([[1]], 1), true);
});
