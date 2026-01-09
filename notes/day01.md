# Day 01 — Linked List Traversal Pattern

## Problems

- [x] length - Return number of nodes
- [x] sumUntil - Sum node values until encountering stopValue
- [x] indexOf - Find first index of target value (return -1 if not found)
- [x] maxValue - Return maximum node value (null for empty list)
- [x] countOccurrences - Count occurrences of target value

## Key pattern(s)

- **Single-Pass Traversal**: Use a single `while (node)` loop to walk the list
  - Careful handling of `null` head as base case
  - Early-exit patterns (break when condition met)
  - Maintain loop invariants (index/count/accumulator updates)
- **Edge Cases**: Empty list, single node, value not found
  - Always check for `null` head at the start
  - Increment counters/indices at correct points in the loop

## Mistakes / got stuck on

- Initially forgot to handle `null` head for `maxValue` and `countOccurrences`
- Off-by-one errors when updating index — increment after checking current node
- `sumUntil` must stop before adding the `stopValue` (early return on match)
- Repo tooling: running the linter fixed Prettier/formatting issues; worth running `npm run lint:fix` and `npm run format` after edits

## Takeaways (2)

1. Traversal problems usually reduce to a single loop and clear base cases
2. Always think through empty input and exact stopping conditions before implementing

## What to review tomorrow

- More linked-list patterns: reverse list, remove-node, merge two lists
- Writing and testing helper functions effectively
- Edge-case handling strategies for linked lists
