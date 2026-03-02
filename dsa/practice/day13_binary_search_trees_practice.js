// day13_binary_search_trees_practice.js
// Practice problems for Day 13 — Binary_Search_Trees
// Created: 2026-03-02
// Author: PC

import { TreeNode } from "../helpers/trees.js";

/**
 * Problem 1: Search in a Binary Search Tree
 * Pattern: BST Navigation (Logarithmic Search)
 */
export function searchBST(root, val) {
  // 1. BASE CASES:
  // If we hit a dead end (null) OR we found the exact node we want, return root!
  if (root === null || root.val === val) {
    return root;
  }

  // [YOUR CODE HERE]

  // 2. If the value we are looking for is LESS than the current root.val:
  //    Return the result of searching down the left side.
  if (val < root.val) return searchBST(root.left, val);

  // 3. If the value we are looking for is GREATER than the current root.val:
  //    Return the result of searching down the right side.
  if (val > root.val) return searchBST(root.right, val);
}

/**
 * Problem 2: Insert into a Binary Search Tree
 * Pattern: BST Modification
 */
export function insertIntoBST(root, val) {
  // 1. BASE CASE: The Dead End
  // If the current root is null, we found our empty plot of land!
  // Create a new TreeNode with the val and return it.
  if (root === null) {
    return new TreeNode(val);
  }

  // [YOUR CODE HERE]

  // 2. If the value is LESS than the current root.val:
  //    Attach the result of the recursive insert to root.left

  // 3. If the value is GREATER than the current root.val:
  //    Attach the result of the recursive insert to root.right
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  // 4. Return the original root so the tree stays connected
  return root;
}

/**
 * Problem 3: Validate a Binary Search Tree
 * Pattern: DFS with Min/Max Boundaries
 */
export function isValidBST(root) {
  // We launch a helper function and start the boundaries at infinity
  return validate(root, -Infinity, Infinity);
}

function validate(node, min, max) {
  // 1. BASE CASE: An empty tree (or hitting a dead end) is technically a valid BST
  if (node === null) return true;

  // 2. THE CHECK: Does this node break the rules?
  // If its value is less than or equal to the minimum, OR greater than or equal to the maximum, it's broken!
  if (node.val <= min || node.val >= max) {
    return false;
  }

  // [YOUR CODE HERE]

  // 3. Keep checking down the left side:
  //    What happens to the boundaries when we go left? (Hint: The max gets updated!)
  //    e.g., let isLeftValid = validate(...);
  // We pass the SAME min, but the MAX becomes the current node.val
  let isLeftValid = validate(node.left, min, node.val);

  // 4. Keep checking down the right side:
  //    What happens to the boundaries when we go right? (Hint: The min gets updated!)
  // We pass the SAME max, but the MIN becomes the current node.val
  let isRightValid = validate(node.right, node.val, max);

  // 5. Return true ONLY if both sides are valid.
  return isLeftValid && isRightValid;
}

// Start here
function practice() {
  console.log("day13_binary_search_trees_practice.js ready");
}

practice();
