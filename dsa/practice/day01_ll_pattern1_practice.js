// day01_ll_pattern1_practice.js
// Practice problems for Day 01 — ll-pattern1
// Created: 2026-01-06
// Author: Mills

// Start here

export function length(head) {
  // TODO

  let current = head;
  let count = 0;

  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}

export function sumUntil(head, stopValue) {
  // TODO
  let current = head;
  let sum = 0;

  while (current !== null) {
    if (current.value === stopValue) return sum;
    sum += current.value;
    current = current.next;
  }
  return sum;
}

export function indexOf(head, target) {
  // Return the index of the first node with value === target
  // If not found, return -1
  // Examples:
  // [4,7,9], target 7 => 1
  // [], target 7 => -1
  // [7], target 7 => 0
  // TODO
  let current = head;
  let index = 0;

  while (current !== null) {
    if (current.value === target) return index;
    current = current.next;
    index++;
  }
  return -1;
}

export function maxValue(head) {
  // TODO
  if (!head) return null;

  let current = head;
  let max = current.value;

  while (current !== null) {
    if (current.value > max) max = current.value;
    current = current.next;
  }
  return max;
}

export function countOccurrences(head, target) {
  // TODO
  if (!head) return 0;
  let current = head;
  let count = 0;

  while (current !== null) {
    if (current.value === target) count++;
    current = current.next;
  }
  return count;
}

function practice() {
  console.log('day01_ll_pattern1_practice.js ready');
}

practice();
