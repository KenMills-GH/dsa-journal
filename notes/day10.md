# Day 10 — Binary Search

## Problems

- [x] Problem 1: Classic Binary Search (The 3 Pointers)
- [x] Problem 2: Search Insert Position (The "Left Pointer" Magic)
- [x] Problem 3: First Bad Version (Boundary / Save & Shrink)
- [x] Problem 4: Search a 2D Matrix (The "Flat Earth" / Coordinate Mapping)

## Key pattern(s)

- The Core Template: left = 0, right = length - 1, while (left <= right). Always calculate mid = Math.floor((left + right) / 2).
- Finding Exact Match: If target === nums[mid], return mid.
- Finding Boundaries: If you find a potential answer but need the first/last occurrence, save the mid to a variable and keep shrinking the window to check for better answers.
- 2D to 1D Mapping: You can pretend a grid is a flat array using length = rows \* cols, row = Math.floor(index / cols), and col = index % cols.

## Mistakes / got stuck on

- Infinite Loops (The Danger Zone): If you forget to do mid + 1 or mid - 1 when updating pointers, your window will never close and your program will freeze. Always aggressively shrink the window!
- Returning the wrong pointer: When the loop breaks (left > right), left is always sitting on the index where the target should be inserted.

## Takeaways (2)

1. Sorted = Binary Search: If an interview question gives you a sorted array or asks for a solution in $O(\log N)$ time, your brain should instantly scream "Binary Search."
2. Logarithmic Time is Insanely Fast: $O(\log N)$ means you can search 1 billion items in just 30 steps. It's practically instantaneous.

## Test Cases (from binary_search.test.js)

- binarySearch([-1, 0, 3, 5, 9, 12], 9) → 4
- binarySearch([-1, 0, 3, 5, 9, 12], 2) → -1
- binarySearch([5], 5) → 0
- searchInsert([1, 3, 5, 6], 5) → 2
- searchInsert([1, 3, 5, 6], 2) → 1
- searchInsert([1, 3, 5, 6], 7) → 4
- searchInsert([1, 3, 5, 6], 0) → 0
- firstBadVersion(5, isBad4) → 4 (isBad4: v >= 4)
- firstBadVersion(1, isBad1) → 1 (isBad1: v >= 1)
- searchMatrix(matrix, 3) → true
- searchMatrix(matrix, 13) → false
- searchMatrix([[1]], 1) → true

## What to review tomorrow

- Practice more variations of binary search (boundaries, 2D mapping, edge cases)
