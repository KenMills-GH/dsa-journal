import assert from "node:assert/strict";
import test from "node:test";

import { connectTailTo, fromArray, getNodeAt, toArray } from "../helpers/ll.js";
import {
  cycleStartValue,
  deleteMiddle,
  hasCycle,
  intersectionValue,
  isPalindrome,
  kthFromEndValue,
  kthFromStartValue,
  middleValue,
  partition,
  reverseKGroup,
} from "../practice/day02_two_pointer_practice.js";

function makeCycle(values, startIndex) {
  const head = fromArray(values);
  if (!head) return null;

  let tail = head;
  let i = 0;
  let startNode = null;

  let cur = head;
  while (cur) {
    if (i === startIndex) startNode = cur;
    tail = cur;
    cur = cur.next;
    i++;
  }
  tail.next = startNode; // create cycle
  return head;
}

test("middleValue()", () => {
  assert.equal(middleValue(null), null);
  assert.equal(middleValue(fromArray([1])), 1);
  assert.equal(middleValue(fromArray([1, 2, 3])), 2);
  assert.equal(middleValue(fromArray([1, 2, 3, 4])), 3); // second middle
  assert.equal(middleValue(fromArray([1, 2, 3, 4, 5])), 3);
});

test("hasCycle()", () => {
  assert.equal(hasCycle(null), false);
  assert.equal(hasCycle(fromArray([1, 2, 3])), false);
  assert.equal(hasCycle(makeCycle([1, 2, 3, 4], 1)), true);
  assert.equal(hasCycle(makeCycle([1], 0)), true);
});

test("cycleStartValue()", () => {
  assert.equal(cycleStartValue(null), null);
  assert.equal(cycleStartValue(fromArray([1, 2, 3])), null);
  assert.equal(cycleStartValue(makeCycle([1, 2, 3, 4], 1)), 2);
  assert.equal(cycleStartValue(makeCycle([7, 8, 9], 0)), 7);
});

test("kthFromEndValue()", () => {
  assert.equal(kthFromEndValue(null, 0), null);
  assert.equal(kthFromEndValue(fromArray([10, 20, 30, 40]), 0), 40);
  assert.equal(kthFromEndValue(fromArray([10, 20, 30, 40]), 1), 30);
  assert.equal(kthFromEndValue(fromArray([10, 20, 30, 40]), 2), 20);
  assert.equal(kthFromEndValue(fromArray([10, 20, 30, 40]), 3), 10);
  assert.equal(kthFromEndValue(fromArray([10, 20, 30, 40]), 4), null);
  assert.equal(kthFromEndValue(fromArray([10]), 0), 10);
  assert.equal(kthFromEndValue(fromArray([10]), 1), null);
});

test("isPalindrome()", () => {
  assert.equal(isPalindrome(null), true);
  assert.equal(isPalindrome(fromArray([1])), true);
  assert.equal(isPalindrome(fromArray([1, 2, 2, 1])), true);
  assert.equal(isPalindrome(fromArray([1, 2, 3, 2, 1])), true);
  assert.equal(isPalindrome(fromArray([1, 2, 3])), false);
});

function makeIntersectingLists(aVals, bVals, sharedVals, aJoinIdx, bJoinIdx) {
  const shared = fromArray(sharedVals);
  const a = fromArray(aVals);
  const b = fromArray(bVals);

  if (!shared) return { a, b, shared: null };

  // attach shared to A at aJoinIdx
  if (!a) {
    // A becomes shared
  } else {
    const aJoin = getNodeAt(a, aJoinIdx);
    aJoin.next = shared;
  }

  // attach shared to B at bJoinIdx
  if (!b) {
    // B becomes shared
  } else {
    const bJoin = getNodeAt(b, bJoinIdx);
    bJoin.next = shared;
  }

  return { a: a || shared, b: b || shared, shared };
}

test("kthFromStartValue()", () => {
  assert.equal(kthFromStartValue(null, 0), null);
  assert.equal(kthFromStartValue(fromArray([10, 20, 30]), 0), 10);
  assert.equal(kthFromStartValue(fromArray([10, 20, 30]), 2), 30);
  assert.equal(kthFromStartValue(fromArray([10, 20, 30]), 3), null);
  assert.equal(kthFromStartValue(fromArray([10, 20, 30]), -1), null);
});

test("intersectionValue()", () => {
  assert.equal(intersectionValue(null, null), null);
  assert.equal(intersectionValue(fromArray([1, 2]), fromArray([1, 2])), null); // same values, different nodes

  const { a, b, shared } = makeIntersectingLists(
    [1, 2, 3],
    [9, 8],
    [7, 7],
    2,
    1
  );
  assert.equal(intersectionValue(a, b), shared.value); // should be 7

  // also test intersect at the shared single node
  const shared2 = fromArray([42]);
  const a2 = connectTailTo(fromArray([1]), shared2);
  const b2 = connectTailTo(fromArray([9, 9]), shared2);
  assert.equal(intersectionValue(a2, b2), 42);
});

test("deleteMiddle()", () => {
  assert.deepEqual(toArray(deleteMiddle(null)), []);
  assert.deepEqual(toArray(deleteMiddle(fromArray([1]))), []);
  assert.deepEqual(toArray(deleteMiddle(fromArray([1, 2]))), [1]); // delete second middle => 2
  assert.deepEqual(toArray(deleteMiddle(fromArray([1, 2, 3]))), [1, 3]);
  assert.deepEqual(toArray(deleteMiddle(fromArray([1, 2, 3, 4]))), [1, 2, 4]); // delete 3
});

test("partition()", () => {
  assert.deepEqual(toArray(partition(null, 3)), []);
  assert.deepEqual(
    toArray(partition(fromArray([3, 5, 8, 5, 10, 2, 1]), 5)),
    [3, 2, 1, 5, 8, 5, 10]
  );
  assert.deepEqual(toArray(partition(fromArray([1, 2, 3]), 0)), [1, 2, 3]);
  assert.deepEqual(toArray(partition(fromArray([1, 2, 3]), 5)), [1, 2, 3]);
});

test("reverseKGroup()", () => {
  assert.deepEqual(toArray(reverseKGroup(null, 2)), []);
  assert.deepEqual(toArray(reverseKGroup(fromArray([1]), 2)), [1]);
  assert.deepEqual(
    toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 2)),
    [2, 1, 4, 3, 5]
  );
  assert.deepEqual(
    toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 3)),
    [3, 2, 1, 4, 5]
  );
  assert.deepEqual(
    toArray(reverseKGroup(fromArray([1, 2, 3, 4]), 4)),
    [4, 3, 2, 1]
  );
  assert.deepEqual(
    toArray(reverseKGroup(fromArray([1, 2, 3, 4]), 1)),
    [1, 2, 3, 4]
  );
  assert.deepEqual(
    toArray(reverseKGroup(fromArray([1, 2, 3, 4]), 0)),
    [1, 2, 3, 4]
  );
});
