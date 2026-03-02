import { strict as assert } from "node:assert";
import test from "node:test";

import { TreeNode } from "../helpers/trees.js";
import {
  insertIntoBST,
  isValidBST,
  searchBST,
} from "../practice/day13_binary_search_trees_practice.js";

test("searchBST()", () => {
  // Building a valid BST:
  //       4
  //     /   \
  //    2     7
  //   / \
  //  1   3

  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);

  // Searching for 2 should return the subtree starting with 2
  const foundNode = searchBST(root, 2);
  assert.equal(foundNode.val, 2);
  assert.equal(foundNode.left.val, 1);

  // Searching for 5 should return null (it doesn't exist)
  assert.equal(searchBST(root, 5), null);
});

test("insertIntoBST()", () => {
  // Starting with a small tree:
  //       4
  //     /   \
  //    2     7

  let root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(7);

  // Insert 5
  root = insertIntoBST(root, 5);

  // 5 is greater than 4 (goes right).
  // 5 is less than 7 (goes left).
  // It should become the left child of 7.
  assert.equal(root.right.left.val, 5);
});

test("isValidBST()", () => {
  // TEST 1: The Healthy Tree
  //       10
  //      /  \
  //     5    15
  let validRoot = new TreeNode(10);
  validRoot.left = new TreeNode(5);
  validRoot.right = new TreeNode(15);

  assert.equal(isValidBST(validRoot), true);

  // TEST 2: The Trap (Invalid Tree)
  //       10
  //      /  \
  //     5    15
  //         /  \
  //        6    20
  // (6 is less than 15, so it's a valid left child of 15 locally...)
  // (...but 6 is LESS than 10, so it absolutely cannot exist on the right side of 10 globally!)

  let invalidRoot = new TreeNode(10);
  invalidRoot.left = new TreeNode(5);
  invalidRoot.right = new TreeNode(15);
  invalidRoot.right.left = new TreeNode(6);
  invalidRoot.right.right = new TreeNode(20);

  assert.equal(isValidBST(invalidRoot), false);
});
