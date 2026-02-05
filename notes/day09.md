# Day 09 — Sliding Window

## Problems

- [x] Problem 1: Max Sum Subarray (Fixed Window - Subtract Old, Add New)
- [x] Problem 2: Min Size Subarray Sum (Dynamic Window - Caterpillar Shrink)
- [x] Problem 3: Longest Substring Without Repeating Characters (Window + Set)

## Key pattern(s)

- The Worm (Dynamic): Expand the head (right++) to find a valid window, then pull the tail (left++) to optimize it.
- Set Tracking: Using a Set alongside the window indices to track unique content in $O(1)$ time.
- Fixed Slide: For size k, you don't need a while loop. Just sum += new - old.

## Mistakes / got stuck on

- Math.min/max Logic: Accidentally overwriting `minLen` with the current length instead of comparing it (Math.min(minLen, current)).
- Set Syntax: Trying to use += or -= on a `Set` object. (Must use `.add()`, `.has()`, `.delete()`).
- Loop Logic: Confusing when to add to the set vs. when to shrink (shrink first to make space, then add).

## Takeaways (2)

1. Don't Re-calculate: The whole point of Sliding Window is to reuse the previous calculation. Never loop from left to right inside the main loop.
2. Valid vs. Invalid: The while loop inside usually runs when the window becomes "invalid" (too big, duplicates, etc.) and runs until it is valid again.

## What to review tomorrow

- Set Methods: Quick refresh on JavaScript `Set` and `Map` methods (add, delete, has, get, set).
