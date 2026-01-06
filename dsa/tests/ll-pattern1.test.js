import test from 'node:test';
import assert from 'node:assert/strict';

import { fromArray } from '../helpers/ll.js';
import {
  length,
  sumUntil,
  indexOf,
  maxValue,
  countOccurrences,
} from '../practice/day01_ll_pattern1_practice.js';

test('length()', () => {
  assert.equal(length(null), 0);
  assert.equal(length(fromArray([1])), 1);
  assert.equal(length(fromArray([1, 2, 3])), 3);
});

test('sumUntil()', () => {
  assert.equal(sumUntil(null, 7), 0);
  assert.equal(sumUntil(fromArray([2, 5, 7, 9]), 7), 7); // 2+5
  assert.equal(sumUntil(fromArray([2, 5, 7, 9]), 99), 23); // sum all
  assert.equal(sumUntil(fromArray([7, 1, 2]), 7), 0); // stop immediately
});

test('indexOf()', () => {
  assert.equal(indexOf(null, 7), -1);
  assert.equal(indexOf(fromArray([]), 7), -1);
  assert.equal(indexOf(fromArray([7]), 7), 0);
  assert.equal(indexOf(fromArray([4, 7, 9]), 7), 1);
  assert.equal(indexOf(fromArray([4, 7, 7, 9]), 7), 1); // first match
});

test('maxValue()', () => {
  assert.equal(maxValue(null), null);
  assert.equal(maxValue(fromArray([7])), 7);
  assert.equal(maxValue(fromArray([3, 1, 9, 2])), 9);
  assert.equal(maxValue(fromArray([-5, -2, -10])), -2);
});

test('countOccurrences()', () => {
  assert.equal(countOccurrences(null, 7), 0);
  assert.equal(countOccurrences(fromArray([]), 7), 0);
  assert.equal(countOccurrences(fromArray([7]), 7), 1);
  assert.equal(countOccurrences(fromArray([4, 7, 7, 9]), 7), 2);
  assert.equal(countOccurrences(fromArray([1, 2, 3]), 7), 0);
});
