# Day ** — **

## Problems

- [x] Problem 1: Maximum Depth of Binary Tree (DFS)
- [x] Problem 2: Binary Tree Level Order Traversal (BFS)
- [ ] Problem 3:

## Key pattern(s)

DFS (Depth-First Search): Goes all the way down a branch before coming back up. Best implemented using Recursion. Remember to trust the function, ask the children for their answers, and include the current node in your calculation.

BFS (Breadth-First Search): Explores the tree level-by-level, top-to-bottom. Best implemented using a Queue (shift and push) inside a while loop.

Level Size: When doing BFS, always capture `const size = queue.length` before you start popping things off, so you know exactly how many nodes belong to the current level.

## Mistakes / got stuck on

Pushing Nulls: Be very careful to use `!== null` when adding children to a BFS queue. If you accidentally push a null node, your next iteration will crash.

## Takeaways (2)

1. Structure vs. Value: Trees have a physical structure (the nodes themselves) and data (the .val). Functions like maxDepth only care about the structure, which is why we add 1 instead of node.val.
2. Trees are just branching Linked Lists: If you get confused, remember that a Tree Node is just a Linked List Node with two arrows instead of one.

## What to review tomorrow

-
