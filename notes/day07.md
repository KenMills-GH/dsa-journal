# Day 07 — Recursion

## Problems

- [x] Problem 1: Factorial (Basic Stack)
- [x] Problem 2: Fibonacci (Branching/Tree)
- [x] Problem 3: Power (Math Recursion)
- [x] Problem 4: Sum of Array (Head & Tail)
- [x] Problem 5: Reverse String (Move Head to End)
- [x] Problem 6: Palindrome Check (Peeling the Onion)
- [x] Problem 7: Flatten Array (Tree Traversal/Nested Data)

## Key pattern(s)

- Head & Tail: Process the first item (`arr[0]`), recurse on the rest (`arr.slice(1)`).
- Peeling the Onion: Compare outer layers (`first === last`), recurse on the middle (`slice(1, -1)`).
- Tree Traversal: Iterate and, if an item is complex (like an array), recurse into it.

## Mistakes / got stuck on

- Type mismatches: Confusing characters (e.g. `'r'`) with numeric indices (e.g. `0`) causing `slice` to behave unexpectedly.
- Order of operations: In `reverseString`, adding the head before the recursive call instead of after produced incorrect ordering.
- Slice syntax: Forgetting that `slice(1, -1)` strips both ends while `slice(1)` keeps to the end.

## Takeaways (2)

1. The Two Rules: Every recursive function needs a Base Case (stop) and a Recursive Step that shrinks the input.
2. Trust the function: Assume the recursive call works; focus on what to do with its result.

## What to review tomorrow

- `slice` mechanics: `slice(start, end)` vs `slice(start)`.
- Return statements: Ensure every code path returns a value (or true/false).
