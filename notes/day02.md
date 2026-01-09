# Day 02 — Two-Pointer Pattern (Linked Lists)

## Problems

- [x] middleValue - Find middle node value (return second middle for even length)
- [x] hasCycle - Detect if linked list has a cycle
- [x] cycleStartValue - Find the value where cycle starts (if exists)
- [x] kthFromEndValue - Return value of node k positions from end (0-based, k=0 is last)
- [x] isPalindrome - Check if linked list values form a palindrome
- [x] kthFromStartValue - Return value at index k from start (0-based)
- [x] intersectionValue - Find value of first intersecting node by reference
- [x] deleteMiddle - Delete middle node (second middle for even) and return new head
- [x] partition - Reorder nodes so values < pivot come before values >= pivot
- [x] reverseKGroup - Reverse nodes in groups of size k

## Key pattern(s)

- **Fast/Slow Two-Pointer**: Move two pointers at different speeds (slow moves 1 step, fast moves 2 steps)
  - Finding middle: fast reaches end when slow reaches middle
  - Cycle detection: if they meet, cycle exists
  - Cycle start finding: reset one pointer to head, move both at same speed until they meet
- **Two-Pointer with Gap**: Maintain distance between pointers (k steps apart) to find kth element
- **Two-Pointer with Alignment**: Advance longer list pointer by difference in length, then move together
- **Pointer Rewiring**: Disconnect/reconnect nodes while iterating to reverse groups or partition
- **Dummy Node**: Create dummy node to simplify edge cases (especially when head might change)

## Mistakes / got stuck on

- None (all tests passed - exit code 0)

## Takeaways (2)

1. Two-pointer patterns are extremely versatile for linked lists - the same fast/slow approach works for finding middle, detecting cycles, and finding cycle start with small variations
2. Dummy nodes eliminate most edge cases (empty list, single node, head changes) - always consider using one for linked list manipulations

## What to review tomorrow

- Fast/slow pointer mechanics and when to use each variation
- Why cycle detection works (relative speed ensures they meet if cycle exists)
- Time complexity of all solutions (all O(n) or better)
