# Day 01 — ll-pattern1

## Problems

- Implemented linked-list helper functions in `dsa/practice/day01_ll_pattern1_practice.js`:
  - `length(head)` — return number of nodes
  - `sumUntil(head, stopValue)` — sum node values until encountering `stopValue`
  - `indexOf(head, target)` — first index of `target` or `-1` if not found
  - `maxValue(head)` — maximum node value (returns `null` for empty list)
  - `countOccurrences(head, target)` — count occurrences of `target`

## Key pattern(s)

- Linked-list traversal using a single `while (node)` loop
- Careful handling of empty list (`null`) as a base case
- Early-exit patterns (stop when condition met)
- Maintain loop invariants (index/count/accumulator updates)

## Mistakes / got stuck on

- Edge cases: initially forgot to handle `null` head for `maxValue` and `countOccurrences`.
- Off-by-one risk when updating `index` — make sure to increment after checking the current node.
- `sumUntil` must stop before adding the `stopValue` (early return on match).
- Repo tooling: running the linter fixed many Prettier/formatting issues across the repo; worth running `npm run lint:fix` and `npm run format` after edits.
- Tests: ran `node --test` for the small test suite — tests passed locally.

## Takeaways

1. Traversal problems usually reduce to a single loop and clear base cases.
2. Always think through empty input and exact stopping conditions.

## What to review tomorrow

- More linked-list patterns: reverse list, remove-node, merge two lists.
- Practice writing small unit tests for each helper function.
- Add comments/edge-case notes to the helper functions for clarity.
