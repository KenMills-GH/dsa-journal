import assert from "node:assert/strict";
import test from "node:test";
import {
  containsDuplicate,
  firstUniqChar,
  intersection,
  isAnagram,
  isIsomorphic,
  twoSum,
  wordPattern,
} from "../practice/day06_hash_maps_practice.js";

// --- Problem 1: Contains Duplicate ---
test("containsDuplicate()", () => {
  assert.equal(containsDuplicate([1, 2, 3, 1]), true);
  assert.equal(containsDuplicate([1, 2, 3, 4]), false);
  assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
  assert.equal(containsDuplicate([]), false); // Edge case: empty
});

// --- Problem 2: Valid Anagram ---
test("isAnagram()", () => {
  assert.equal(isAnagram("anagram", "nagaram"), true);
  assert.equal(isAnagram("rat", "car"), false);
  assert.equal(isAnagram("a", "ab"), false); // Different lengths
  assert.equal(isAnagram("", ""), true); // Empty strings are anagrams
});

// --- Problem 3: Two Sum ---
test("twoSum()", () => {
  // Case 1: Standard
  // target = 9, nums[0] + nums[1] = 2 + 7 = 9
  const res1 = twoSum([2, 7, 11, 15], 9);
  assert.ok(res1.includes(0) && res1.includes(1));

  // Case 2: Indices are not at the start
  // target = 6, nums[1] + nums[2] = 2 + 4 = 6
  const res2 = twoSum([3, 2, 4], 6);
  assert.ok(res2.includes(1) && res2.includes(2));

  // Case 3: Same number used twice (but must be different indices)
  // target = 6, nums[0] + nums[1] = 3 + 3 = 6
  const res3 = twoSum([3, 3], 6);
  assert.ok(res3.includes(0) && res3.includes(1));
});

test("firstUniqChar()", () => {
  assert.equal(firstUniqChar("leetcode"), 0);
  assert.equal(firstUniqChar("loveleetcode"), 2);
  assert.equal(firstUniqChar("aabb"), -1);
});

test("intersection()", () => {
  // [1, 2, 2, 1] and [2, 2] -> Both share '2'
  const result = intersection([1, 2, 2, 1], [2, 2]);
  assert.deepEqual(result, [2]);

  // [4, 9, 5] and [9, 4, 9, 8, 4] -> Both share '9' and '4'
  // Order doesn't matter for sets, but usually returns in insertion order
  const result2 = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
  assert.ok(result2.includes(9) && result2.includes(4));
});

test("isIsomorphic()", () => {
  assert.equal(isIsomorphic("egg", "add"), true);
  assert.equal(isIsomorphic("foo", "bar"), false);
  assert.equal(isIsomorphic("paper", "title"), true);
  assert.equal(isIsomorphic("ab", "aa"), false); // 'b' cannot map to 'a' if 'a' is already taken
});

test("wordPattern()", () => {
  assert.equal(wordPattern("abba", "dog cat cat dog"), true);
  assert.equal(wordPattern("abba", "dog cat cat fish"), false);
  assert.equal(wordPattern("aaaa", "dog cat cat dog"), false);
});
