import assert from "node:assert/strict";
import test from "node:test";

import {
  connectTailTo,
  fromArray,
  makeCycle,
  makeIntersectingLists,
  toArray,
} from "../helpers/ll.js";
import {
  cycleLength,
  cycleStartValue,
  deleteMiddle,
  hasCycle,
  intersectionValue,
  isPalindrome,
  kthFromEndValue,
  kthFromStartValue,
  middleValue,
  partition,
  removeDuplicatesSorted,
  removeNthFromEnd,
  reverseKGroup,
} from "../practice/day02_two_pointer_practice.js";

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

test("cycleLength()", () => {
  assert.equal(cycleLength(null), 0);
  assert.equal(cycleLength(fromArray([1, 2, 3])), 0);

  assert.equal(cycleLength(makeCycle([1], 0)), 1);
  assert.equal(cycleLength(makeCycle([1, 2], 0)), 2);
  assert.equal(cycleLength(makeCycle([1, 2, 3, 4], 1)), 3); // 2->3->4->2
  assert.equal(cycleLength(makeCycle([5, 6, 7, 8, 9], 3)), 2); // 8->9->8
});

test("removeNthFromEnd()", () => {
  // empty
  assert.deepEqual(toArray(removeNthFromEnd(null, 1)), []);

  // n out of range -> unchanged
  assert.deepEqual(
    toArray(removeNthFromEnd(fromArray([1, 2, 3]), 4)),
    [1, 2, 3]
  );
  assert.deepEqual(
    toArray(removeNthFromEnd(fromArray([1, 2, 3]), 0)),
    [1, 2, 3]
  );
  assert.deepEqual(
    toArray(removeNthFromEnd(fromArray([1, 2, 3]), -2)),
    [1, 2, 3]
  );

  // remove last (n=1)
  assert.deepEqual(
    toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 1)),
    [1, 2, 3, 4]
  );

  // remove 2nd from end
  assert.deepEqual(
    toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 2)),
    [1, 2, 3, 5]
  );

  // remove head (n = length)
  assert.deepEqual(
    toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 5)),
    [2, 3, 4, 5]
  );

  // single node
  assert.deepEqual(toArray(removeNthFromEnd(fromArray([9]), 1)), []);
  assert.deepEqual(toArray(removeNthFromEnd(fromArray([9]), 2)), [9]); // out of range unchanged
});

test("removeDuplicatesSorted()", () => {
  assert.deepEqual(toArray(removeDuplicatesSorted(null)), []);

  assert.deepEqual(toArray(removeDuplicatesSorted(fromArray([1]))), [1]);

  assert.deepEqual(
    toArray(removeDuplicatesSorted(fromArray([1, 1, 2]))),
    [1, 2]
  );

  assert.deepEqual(
    toArray(removeDuplicatesSorted(fromArray([1, 1, 2, 3, 3]))),
    [1, 2, 3]
  );

  assert.deepEqual(
    toArray(removeDuplicatesSorted(fromArray([1, 2, 3, 4]))),
    [1, 2, 3, 4]
  );

  assert.deepEqual(toArray(removeDuplicatesSorted(fromArray([0, 0, 0, 0]))), [
    0,
  ]);

  assert.deepEqual(
    toArray(removeDuplicatesSorted(fromArray([-2, -2, -1, -1, -1, 0]))),
    [-2, -1, 0]
  );
});
