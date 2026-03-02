import { strict as assert } from "node:assert";
import test from "node:test";

import { TreeNode } from "../helpers/trees.js";
import { levelOrder, maxDepth } from "../practice/day12_trees_practice.js";

test("maxDepth()", () => {
  // Manually building a small tree:
  //      3
  //     / \
  //    9  20
  //       / \
  //      15  7

  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  assert.equal(maxDepth(root), 3); // The longest path is 3 -> 20 -> 15 (or 7)
  assert.equal(maxDepth(null), 0); // An empty tree has depth 0
});

test("levelOrder()", () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  assert.deepEqual(levelOrder(root), [[3], [9, 20], [15, 7]]);
  assert.deepEqual(levelOrder(null), []);
});
