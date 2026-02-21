// day10_binary_search_practice.js
// Practice problems for Day 10 — Binary Search
// Created: 2026-02-19
// Author: PC

/**
 * Problem 1: Classic Binary Search
 * Pattern: Left, Right, and Mid pointers
 */
export function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // We keep looking as long as the search window is valid (left hasn't crossed right)
  while (left <= right) {
    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // [YOUR CODE HERE]
    // 1. Check if nums[mid] is the target. If yes, return mid.
    if (nums[mid] === target) {
      return mid;
    }
    // 2. If target is GREATER than nums[mid], shrink window to the right half
    //    (left = mid + 1)
    else if (target > nums[mid]) {
      left = mid + 1;
    }
    // 3. If target is LESS than nums[mid], shrink window to the left half
    //    (right = mid - 1)
    else {
      right = mid - 1;
    }
  }

  // If the loop finishes and we didn't return anything, the target isn't here.
  return -1;
}

/**
 * Problem 2: Search Insert Position
 * Pattern: Classic Binary Search with alternative return
 */
export function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // [YOUR CODE HERE]
  // The loop finished and we didn't find the target.
  // Instead of returning -1, what variable holds our exact insertion point?
  return left;
}

export function firstBadVersion(n, isBadVersion) {
  let left = 1;
  let right = n;
  let firstBad = -1; // Variable to save our best guess

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (isBadVersion(mid)) {
      // [YOUR CODE HERE]
      // We found a bad version!
      // 1. Save 'mid' into the 'firstBad' variable
      firstBad = mid;
      // 2. Shrink window to the LEFT (right = mid - 1) to see if there's an earlier one
      right = mid - 1;
    } else {
      // [YOUR CODE HERE]
      // It's a good version. The first bad one MUST be to the right.
      // 1. Shrink window to the RIGHT (left = mid + 1)
      left = mid + 1;
    }
  }

  return firstBad;
}

/**
 * Problem 4: Search a 2D Matrix
 * Pattern: Binary Search with 1D to 2D coordinate mapping
 */
export function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  // The "pretend" flat array goes from 0 to (total elements - 1)
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Convert flat 'mid' into 2D grid coordinates
    const row = Math.floor(mid / cols);
    const col = mid % cols;
    const midValue = matrix[row][col];

    // [YOUR CODE HERE]
    // You know exactly what to do from here!
    // Do a standard binary search check against midValue and target.
    if (midValue === target) {
      return true;
    } else if (target > midValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

// Start here
function practice() {
  console.log("day10_binary_search_practice.js ready");
}

practice();
