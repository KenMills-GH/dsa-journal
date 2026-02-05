// day08_more_two_pointer_practice.js
// Practice problems for Day 08 — More Two Pointer
// Created: 2026-02-02
// Author: PC

/**
 * Problem 1: Valid Palindrome
 * Pattern: Left & Right Pointers (The Pincher)
 */
export function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // [YOUR CODE HERE]
    // 1. Check if s[left] !== s[right]. If so, return false.
    if (s[left] !== s[right]) return false;
    // 2. Move pointers closer (left goes up, right goes down).
    left++;
    right--;
  }

  return true;
}

/**
 * Problem 2: Two Sum (Sorted)
 * Pattern: Left & Right Pointers
 */
export function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [nums[left], nums[right]];
    }

    // [YOUR CODE HERE]
    // If sum is too big?
    if (sum > target) {
      right--;
    }
    // If sum is too small?
    if (sum < target) {
      left++;
    }
  }

  return [];
}

/**
 * Problem 3: Remove Duplicates (Sorted)
 * Pattern: Fast & Slow Pointers (Writer & Reader)
 */
export function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

/**
 * Problem 4: Move Zeroes
 * Pattern: Fast & Slow Pointers (Swap)
 */
export function moveZeroes(nums) {
  let slow = 0; // Where the next non-zero should go

  // Scan the whole array with 'fast'
  for (let fast = 0; fast < nums.length; fast++) {
    // If we find a non-zero, bring it to the front
    if (nums[fast] !== 0) {
      // swap(nums, slow, fast);
      // SWAP directly using destructuring
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  // No need to return anything, modification is in-place
}

/**
 * Problem 5: Container With Most Water
 * Pattern: Two Pointers (Greedy Shrink)
 */
export function maxArea(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    // 1. Calculate dimensions
    const width = right - left;

    // The container height is limited by the shorter wall
    const containerHeight = Math.min(heights[left], heights[right]);

    // 2. Calculate area
    const currentArea = width * containerHeight;

    // 3. Update max if we found a new biggest container
    maxArea = Math.max(maxArea, currentArea);

    // 4. Decision: Move the shorter wall inward
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Start here
function practice() {
  console.log("day08_more_two_pointer_practice.js ready");
}

practice();
