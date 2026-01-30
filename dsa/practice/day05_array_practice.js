// day05_array_practice.js
// Practice problems for Day 05 — array
// Created: 2026-01-28
// Author: PC

/**
 * Day 05: Arrays & Two Pointers
 * Pattern: Same-direction & Opposite-direction (The Squeeze)
 */

import { swap } from "../helpers/array.js";

/**
 * Problem 1: Remove Duplicates (Easy)
 * Constraint: O(1) space, modify in-place.
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
 * Problem 2: 3Sum (Medium)
 * Find all unique triplets that sum to 0.
 */
export function threeSum(nums) {
  const results = [];
  // 1. Sort the array (O(n log n))
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 2. Handle duplicates for the "fixed" number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);

        // 3. TODO: How do we move 'left' and 'right' to skip duplicates?
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return results;
}

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

/**
 * Problem 4: Valid Palindrome (Easy)
 * Pattern: Two Pointers (Squeeze)
 */
export function isPalindrome(s) {
  // Use 'i' flag for case-insensitivity so "A" matches "a"
  const validChar = /^[a-z0-9]$/i;

  let head = 0;
  let tail = s.length - 1;

  while (head < tail) {
    // Loop while pointers haven't met

    // 1. If head is pointing at garbage, skip it (increment head)
    if (!validChar.test(s[head])) {
      head++;
      continue; // Skip the rest of the loop, go back to start
    }

    // 2. If tail is pointing at garbage, skip it (decrement tail)
    if (!validChar.test(s[tail])) {
      tail--;
      continue;
    }

    // 3. Both are pointing at valid chars now. Compare them!
    // Important: Convert to lowercase before comparing
    if (s[head].toLowerCase() !== s[tail].toLowerCase()) {
      return false; // Mismatch found
    }

    // 4. If they matched, move both inward to check the next pair
    head++;
    tail--;
  }

  return true; // If we get here, it's a palindrome
}

/**
 * Problem 5: Move Zeroes (Easy)
 * Pattern: Two Pointers (Slow & Fast)
 */
export function moveZeroes(nums) {
  let slow = 0; // Where the next non-zero should go

  // Scan the whole array with 'fast'
  for (let fast = 0; fast < nums.length; fast++) {
    // If we find a non-zero, bring it to the front
    if (nums[fast] !== 0) {
      swap(nums, slow, fast);
      slow++;
    }
  }
  // No need to return anything, modification is in-place
}

/**
 * Problem 6: Sort Colors (Medium)
 * Pattern: Three Pointers (Dutch National Flag)
 */
export function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // TODO: Handle 0 (Swap with low)
      swap(nums, mid, low);
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // TODO: Handle 1 (Just move forward)
      mid++;
    } else {
      // TODO: Handle 2 (Swap with high)
      swap(nums, mid, high);
      high--;
    }
  }
}
