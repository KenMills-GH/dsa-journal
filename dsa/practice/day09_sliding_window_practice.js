// day09_sliding_window_practice.js
// Practice problems for Day 09 — Sliding_Window
// Created: 2026-02-05
// Author: PC

/**
 * Problem 1: Max Sum Subarray
 * Pattern: Fixed Sliding Window
 */
export function maxSumSubarray(nums, k) {
  if (nums.length < k) return null;

  let currentSum = 0;

  // 1. Build the FIRST window (sum of first k items)
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxSum = currentSum;

  // 2. Slide the window from index k to the end
  for (let i = k; i < nums.length; i++) {
    // [YOUR CODE HERE]
    // a. Add the new element (nums[i])
    // b. Subtract the old element (nums[i - k])
    currentSum = currentSum - nums[i - k] + nums[i];
    // c. Update maxSum (Math.max)
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

/**
 * Problem 2: Smallest Subarray with Sum >= Target
 * Pattern: Dynamic Sliding Window (Expand & Shrink)
 */
export function minSubArrayLen(target, nums) {
  let minLen = Infinity; // Start with largest possible value
  let left = 0;
  let currentSum = 0;

  // The 'right' pointer expands the window
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    // WHILE the window is valid (sum >= target), try to shrink it
    while (currentSum >= target) {
      // 1. Update minLen (current window size is right - left + 1)
      minLen = Math.min(minLen, right - left + 1);
      // 2. Subtract nums[left] from currentSum
      currentSum -= nums[left];
      // 3. Move left forward
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

/**
 * Problem 3: Longest Substring Without Repeating Characters
 * Pattern: Dynamic Sliding Window + Set
 */
export function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  let windowSet = new Set();

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // 1. Shrink phase: If duplicate exists, remove from left until it's gone
    while (windowSet.has(currentChar)) {
      windowSet.delete(s[left]);
      left++;
    }

    // 2. Expand phase: Now it's safe to add the new character
    windowSet.add(currentChar);

    // 3. Update Max
    maxLength = Math.max(maxLength, windowSet.size);
    // Note: windowSet.size is the same as (right - left + 1)
  }

  return maxLength;
}

// Start here
function practice() {
  console.log("day09_sliding_window_practice.js ready");
}

practice();
