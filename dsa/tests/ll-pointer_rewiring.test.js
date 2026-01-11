import assert from "node:assert/strict";
import test from "node:test";

import { fromArray, toArray } from "../helpers/ll.js";
import {
  insertAfter,
  removeAll,
  removeFirst,
  reverseList,
  swapPairs,
} from "../practice/day03_pointer_rewiring_practice.js";

test("reverseList()", () => {
  assert.deepEqual(toArray(reverseList(null)), []);
  assert.deepEqual(toArray(reverseList(fromArray([1]))), [1]);
  assert.deepEqual(toArray(reverseList(fromArray([1, 2, 3]))), [3, 2, 1]);
  assert.deepEqual(toArray(reverseList(fromArray([1, 2, 3, 4]))), [4, 3, 2, 1]);
});

test("removeAll()", () => {
  assert.deepEqual(toArray(removeAll(null, 7)), []);
  assert.deepEqual(toArray(removeAll(fromArray([7]), 7)), []);
  assert.deepEqual(toArray(removeAll(fromArray([1, 2, 3]), 7)), [1, 2, 3]);
  assert.deepEqual(toArray(removeAll(fromArray([7, 1, 7, 2, 7]), 7)), [1, 2]);
  assert.deepEqual(toArray(removeAll(fromArray([7, 7, 7]), 7)), []);
  assert.deepEqual(toArray(removeAll(fromArray([1, 7, 7, 7, 2]), 7)), [1, 2]);
});

test("removeFirst()", () => {
  assert.deepEqual(toArray(removeFirst(null, 7)), []);
  assert.deepEqual(toArray(removeFirst(fromArray([7]), 7)), []);
  assert.deepEqual(toArray(removeFirst(fromArray([1, 2, 3]), 7)), [1, 2, 3]);

  assert.deepEqual(toArray(removeFirst(fromArray([7, 1, 7, 2]), 7)), [1, 7, 2]);
  assert.deepEqual(toArray(removeFirst(fromArray([1, 7, 7, 2]), 7)), [1, 7, 2]);
  assert.deepEqual(toArray(removeFirst(fromArray([1, 2, 3]), 1)), [2, 3]); // remove head
});

test("insertAfter()", () => {
  assert.deepEqual(toArray(insertAfter(null, 2, 99)), []);

  assert.deepEqual(
    toArray(insertAfter(fromArray([1, 2, 3]), 2, 99)),
    [1, 2, 99, 3]
  );

  assert.deepEqual(
    toArray(insertAfter(fromArray([1, 2, 3]), 7, 99)),
    [1, 2, 3] // unchanged
  );

  assert.deepEqual(toArray(insertAfter(fromArray([2]), 2, 99)), [2, 99]);

  assert.deepEqual(
    toArray(insertAfter(fromArray([1, 2, 2, 3]), 2, 99)),
    [1, 2, 99, 2, 3] // first occurrence only
  );
});

test("swapPairs()", () => {
  assert.deepEqual(toArray(swapPairs(null)), []);
  assert.deepEqual(toArray(swapPairs(fromArray([1]))), [1]);
  assert.deepEqual(toArray(swapPairs(fromArray([1, 2]))), [2, 1]);
  assert.deepEqual(toArray(swapPairs(fromArray([1, 2, 3]))), [2, 1, 3]);
  assert.deepEqual(toArray(swapPairs(fromArray([1, 2, 3, 4]))), [2, 1, 4, 3]);
  assert.deepEqual(
    toArray(swapPairs(fromArray([1, 2, 3, 4, 5]))),
    [2, 1, 4, 3, 5]
  );
});
