// day06_hash_maps_practice.js
// Practice problems for Day 06 — hash maps
// Created: 2026-01-29
// Author: PC

/**
 * Day 01: Hash Maps & Sets
 */

/**
 * Problem 1: Contains Duplicate (Easy)
 * Goal: Return true if any value appears at least twice.
 * Hint: Use a Set to track what you've seen.
 */
export function containsDuplicate(nums) {
  // TODO: Implement using a Set
  const seen = new Set();

  for (const dupe of nums) {
    if (seen.has(dupe)) {
      return true;
    }
    seen.add(dupe);
  }
  return false;
}

/**
 * Problem 2: Valid Anagram (Easy)
 * Goal: Return true if t has the same characters as s.
 * Hint: Use a frequency map. (Count up for 's', count down for 't').
 */
export function isAnagram(s, t) {
  // 1. Fail Fast
  if (s.length !== t.length) return false;

  // Initialize the Map
  const inventory = new Map();

  // 2. Build Inventory (from string 's')
  for (const char of s) {
    // Get current count (or 0 if it doesn't exist yet)
    const currentCount = inventory.get(char) || 0;

    // Update the map
    inventory.set(char, currentCount + 1);
  }

  // 3. Subtract/Check Inventory (from string 't')
  for (const char of t) {
    // Check: If char doesn't exist OR the count is already 0
    // (inventory.get(char) returns undefined or 0, both are falsy)
    if (!inventory.get(char)) {
      return false;
    }

    // Decrement the count
    inventory.set(char, inventory.get(char) - 1);
  }

  return true;
}

// /**
//  * Problem 3: Two Sum (Easy)
//  * Goal: Return indices of the two numbers that add up to target.
//  * Hint: As you iterate, store { value: index } in a Map.
//  * Check if (target - currentVal) exists in the Map.
//  */
export function twoSum(nums, target) {
  const prevMap = new Map(); // Key: Number, Value: Index

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const neededNum = target - currentNum;

    // 1. Check if 'neededNum' is in the map
    // Hint: use prevMap.has()
    if (prevMap.has(neededNum)) {
      // 2. If yes, return [ prevMap.get(neededNum), i ]
      return [prevMap.get(neededNum), i];
    }

    // 3. If no, store currentNum and i in the map
    prevMap.set(currentNum, i);
  }
}

/**
 * Problem 4: First Unique Character (Easy)
 * Pattern: Frequency Counter
 */
export function firstUniqChar(s) {
  // 1. Build the frequency map
  const seen = new Map();
  // 2. Loop through string 's' again to find the first char with count 1
  for (const char of s) {
    const currentChar = seen.get(char) || 0;

    seen.set(char, currentChar + 1);
  }

  // 3. Loop through string 's' again to find the first char with count 1
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // Check the map: if (seen.get(char) === 1) ...
    if (seen.get(char) === 1) {
      // what do we return?
      return i;
    }
  }
  // 4. Return -1 if none found
  return -1;
}

/**
 * Problem 5: Intersection of Two Arrays
 * Pattern: Existence (Set)
 */
export function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const resultSet = new Set();

  for (const num of nums2) {
    if (set1.has(num)) {
      // Fixed syntax: added ')'
      resultSet.add(num);
    }
  }

  return Array.from(resultSet);
}

/**
 * Problem 7: Isomorphic Strings
 * Pattern: Two-Way Map (Dictionary)
 */
export function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const sToT = new Map(); // Maps char from S -> T
  const tToS = new Map(); // Maps char from T -> S

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // 1. Check if we've seen charS before
    if (sToT.has(charS)) {
      // If we have, it MUST map to the same charT as before
      if (sToT.get(charS) !== charT) {
        return false; // Mismatch! 'e' mapped to 'a', now tries to map to 'z'
      }
    }

    // 2. Check if we've seen charT before (Reverse check)
    if (tToS.has(charT)) {
      // If we have, it MUST map to the same charS as before
      if (tToS.get(charT) !== charS) {
        return false; // Mismatch! Two different letters mapping to the same target
      }
    }

    // 3. Register the new mapping
    sToT.set(charS, charT);
    tToS.set(charT, charS);
  }

  return true;
}

/**
 * Problem 8: Word Pattern
 * Pattern: Two-Way Map (Bijection)
 */
export function wordPattern(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // 1. Check char -> word mapping
    if (charToWord.has(char) && charToWord.get(char) !== word) {
      return false;
    }

    // 2. Check word -> char mapping
    if (wordToChar.has(word) && wordToChar.get(word) !== char) {
      return false;
    }

    // 3. Register the mapping
    charToWord.set(char, word);
    wordToChar.set(word, char);
  }

  return true;
}

// Start here
function practice() {
  console.log("day06_hash_maps_practice.js ready");
}

practice();
