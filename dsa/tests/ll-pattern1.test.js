import test from 'node:test';
import assert from 'node:assert/strict';

import { fromArray } from '../helpers/ll.js';
import { length, sumUntil } from '../practice/ll-pattern1.js';

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
