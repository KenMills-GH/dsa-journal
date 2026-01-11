# Day 03 — Pointer Rewiring

## Problems

- [x] Reverse a singly linked list in-place
- [x] Remove all nodes with a target value
- [x] Remove the first occurrence of target
- [x] Insert a value after the first occurrence of "afterValue"
- [x] Swap every two adjacent nodes

## Key pattern(s)

- Pointer rewiring: modifying .next pointers to change list structure
- Using dummy head when head might change
- Using prev pointer for deletions and swaps
- Saving next pointer before modifying .next

## Mistakes / got stuck on

-

## Takeaways (2)

1. Always consider if head can change - use dummy if needed
2. For operations requiring previous node (delete, swap), track prev pointer

## What to review tomorrow

-
