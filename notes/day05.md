# Day 05 — Arrays & Two Pointers

## Goal

Master traversing arrays without nested loops ($O(n)$ instead of $O(n^2)$) using multiple pointers.

## Problems

- [x] Problem 1: Remove Duplicates (Easy)
- [x] Problem 2: 3Sum (Medium)
- [x] Problem 3: Container With Most Water (Medium)
- [x] Problem 4: Valid Palindrome (Easy)
- [x] Problem 5: Move Zeroes (Easy)
- [x] Problem 6: Sort Colors (Medium)

## 🧠 The 3 Core Patterns

### 1. Opposite Ends ("The Squeeze")

**Visual:** Left -> ... <- Right

**When to use:**

- The array is sorted (finding pairs/triplets)
- Palindrome checking
- Container/Area problems (shrinking window)

**Logic:** Move pointers inward based on a condition (e.g., sum is too small $\rightarrow$ move left; sum is too big $\rightarrow$ move right).

### 2. Same Direction ("Slow & Fast")

**Visual:** Slow -> ... Fast ->

**When to use:**

- In-place modification (removing duplicates, moving zeroes)
- Relative order matters

**Roles:**

- **Fast (Scanner):** Iterates through the array to find "good" or "new" elements
- **Slow (Writer/Builder):** Marks the position where the next valid element should be written/swapped

### 3. Dutch National Flag (Three Pointers)

**Visual:** [0s ... low] ... [1s ... mid] ... [unknown] ... [high ... 2s]

**When to use:**

- Sorting elements into 3 categories (e.g., Colors 0, 1, 2) in one pass

**Roles:**

- **low:** The border for the first category (0s)
- **mid:** The scanner exploring unknown territory
- **high:** The border for the last category (2s)

## 🛠 Problem Logic Breakdown

### 1. Remove Duplicates (Sorted)

**Pattern:** Slow & Fast

**Logic:**

- If `nums[fast]` is different from `nums[slow]`, we found a new unique number
- Increment `slow`, then write `nums[slow] = nums[fast]`
- **Key:** Overwriting is faster than `.splice()`

### 2. 3Sum (Target Sum = 0)

**Pattern:** Fix one + Squeeze

**Steps:**

1. Sort the array (Crucial!)
2. Loop `i` through the array. `nums[i]` is the "fixed" number
3. Set `left = i + 1` and `right = end`. Run standard Two Sum squeeze
4. **Duplicate Trap:** If `nums[i] === nums[i-1]`, continue to avoid duplicate triplets. Inside the squeeze, while loop past duplicates after finding a valid match

### 3. Container With Most Water

**Pattern:** Greedy Squeeze

**Formula:** Area = (Right - Left) × min(height[Left], height[Right])

**Decision:** Always move the shorter wall

**Why?** The area is limited by the shorter wall. Keeping it guarantees the height cannot increase, but the width is decreasing. The only chance for a larger area is to ditch the short wall in hopes of finding a taller one.

### 4. Valid Palindrome

**Pattern:** Two Pointers (Squeeze)

**Logic:**

- Filter non-alphanumeric characters
- Compare characters from both ends, moving inward
- Case-insensitive comparison

### 5. Move Zeroes

**Pattern:** Slow & Fast

**Logic:**

- `slow` tracks where the next non-zero should go
- `fast` scouts through the array
- Swap non-zero elements forward, leaving zeroes at the end

### 6. Sort Colors (0, 1, 2)

**Pattern:** 3 Pointers (Dutch National Flag)

**Logic:**

- When `nums[mid] === 0`: Swap with `low`, increment both
- When `nums[mid] === 1`: Just move `mid` forward
- When `nums[mid] === 2`: Swap with `high`, **do NOT increment mid**

**The Trap:** When swapping `nums[mid]` with `nums[high]` (found a 2), do not increment mid.

**Why?** The value that came from high is unknown. It might be a 0 that needs to be swapped to the front. We must re-examine it in the next iteration.

## 🧪 Mental Model Review (Q&A Log)

### Q1: The "Sorted" Clue

**Scenario:** Find two numbers in a sorted array that add to a target.

**Strategy:** Squeeze (Opposite Ends)

**Why:** Sorting gives directionality. If the sum is too small, we know moving the left pointer up will increase it. If the array wasn't sorted, we'd need a Hash Map.

### Q2: The "In-Place" Writer

**Scenario:** Remove all instances of 3 from an array in-place, keeping order.

**Strategy:** Slow & Fast

**Why:** We need to filter the array while keeping the valid data compacted at the start. Roles: Fast scouts for non-3s. Slow waits to write them down.

### Q3: The Optimization Decision

**Scenario:** Comparing two walls for max water area. Left is 1, Right is 7.

**Strategy:** Squeeze

**Action:** Move Left

**Why:** Width always shrinks as we move. To compensate, we need more Height. The short wall (1) is the bottleneck; discarding it is the only way to potentially increase the container height.

## Key Patterns Summary

- **Sorted arrays?** → Squeeze (Opposite Ends)
- **In-place modification?** → Slow & Fast
- **Three categories/states?** → Dutch National Flag
- **Palindrome?** → Two Pointers (Squeeze)

## Mistakes / Got Stuck On

- Forgetting to handle duplicates in 3Sum (both for the fixed number and during the squeeze)
- Not incrementing `mid` after swapping with `high` in sortColors
- Off-by-one errors with pointer initialization and loop boundaries

## Takeaways (2)

1. **Multiple pointers transform $O(n^2)$ problems into $O(n)$ solutions** — The key is understanding when to use which pattern: opposite ends for sorted data, same direction for filtering/writing, and three pointers for state-based categorization.

2. **"Move the bottleneck" thinking** — In container problems and similar scenarios, always move the limiting factor. This greedy intuition generalizes: the pointer pointing at the smaller/weaker element is the bottleneck, so moving it might yield better results.

## What to Review Tomorrow

- Practice more 3Sum variations (4Sum, etc.)
- Solidify the Dutch National Flag pattern with other sorting problems
- Work on mixed scenarios combining multiple pointer techniques
