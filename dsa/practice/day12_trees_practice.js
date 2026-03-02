// day12_trees_practice.js
// Practice problems for Day 12 — Trees
// Created: 2026-02-22
// Author: PC

/**
 * Problem 1: Maximum Depth of Binary Tree
 * Pattern: Depth-First Search (DFS / Recursion)
 */
export function maxDepth(root) {
  // 1. BASE CASE: The Stop Sign
  // If the tree is empty (root is null), how deep is it?
  if (root === null) {
    // [YOUR CODE HERE]
    return 0;
  }

  // 2. RECURSIVE STEP: Ask the children!
  // Call maxDepth on the left side and the right side.
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // 3. COMBINE:
  // Take the larger of the two depths, add 1 for the current node, and return it.
  // [YOUR CODE HERE: use Math.max]
  return Math.max(leftDepth, rightDepth) + 1;
}

/**
 * Problem 2: Level Order Traversal
 * Pattern: Breadth-First Search (BFS / Queue)
 */
export function levelOrder(root) {
  // Edge case: If the tree is completely empty, return an empty array
  if (root === null) return [];

  const result = [];
  const queue = [root]; // Start the line with the root node

  while (queue.length > 0) {
    const levelSize = queue.length; // How many nodes are on this current level?
    const currentLevelValues = []; // Array to hold the numbers for just this level

    // Process ONLY the nodes on the current level
    for (let i = 0; i < levelSize; i++) {
      // [YOUR CODE HERE - Fill in these 4 steps]
      // 1. Remove the first node from the queue using queue.shift()
      //    (e.g., const currentNode = queue.shift();)
      // 2. Push currentNode.val into the 'currentLevelValues' array.
      // 3. If currentNode.left is NOT null, push it to the back of the queue.
      // 4. If currentNode.right is NOT null, push it to the back of the queue.
      const currentNode = queue.shift();
      currentLevelValues.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    // We finished the inner loop, meaning this level is done!
    // Add this level's array of numbers to our final result array.
    result.push(currentLevelValues);
  }

  return result;
}

// Start here
function practice() {
  console.log("day12_trees_practice.js ready");
}

practice();
