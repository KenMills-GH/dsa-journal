// day03_pointer_rewiring_practice.js
// Practice problems for Day 03 — Pointer_Rewiring
// Created: 2026-01-09
// Author: PC

/*
Reverse a singly linked list in-place and return the new head.
Must run in O(n) time and O(1) extra space.
*/

import { Node } from "../helpers/ll.js";

// 1) Reverse list
export function reverseList(head) {
  // Return new head

  let curr = head;
  let prev = null;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

/*
Given the head of a singly linked list and a target value, remove every node whose value equals target.
Return the new head.
Do it in O(n) time and O(1) extra space.
*/

// 2) Remove all nodes with a target value
export function removeAll(head, target) {
  // Remove every node where value === target
  // Return new head

  const dummy = { next: head };
  let prev = dummy;
  let curr = head;

  while (curr !== null) {
    if (curr.value === target) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return dummy.next;
}

/*
Remove the first node whose value equals target from a singly linked list.
Return the new head.
If target isn’t found, return the list unchanged.
O(n) time, O(1) space.
*/

// 3) Remove the first occurrence of target
export function removeFirst(head, target) {
  // Return new head
  const dummy = { next: head };
  let prev = dummy;
  let curr = head;

  while (curr !== null) {
    if (curr.value === target) {
      prev.next = curr.next;
      return dummy.next;
    }
    prev = curr;
    curr = curr.next;
  }
  return dummy.next;
}

/*
Given the head of a singly linked list, insert a new node with value newValue
immediately after the first node whose value is afterValue.
If afterValue doesn’t exist, return the list unchanged.
Return the head.
*/

// 4) Insert a value after the first occurrence of "afterValue"
export function insertAfter(head, afterValue, newValue) {
  // If afterValue not found, return head unchanged
  // Return head
  let curr = head;

  while (curr !== null) {
    if (curr.value === afterValue) {
      const newNode = new Node(newValue, curr.next); // newNode.next = curr.next
      curr.next = newNode;
      return head; // first occurrence only
    }
    curr = curr.next;
  }

  return head; // unchanged if not found
}

/*
Given the head of a singly linked list, swap every two adjacent nodes and return the new head.
You must swap nodes, not just values.
Examples:
1→2→3→4 becomes 2→1→4→3
1→2→3 becomes 2→1→3
*/

// 5) Swap pairs
export function swapPairs(head) {
  const dummy = { next: head };
  let prev = dummy;

  while (prev.next && prev.next.next !== null) {
    const first = prev.next;
    const second = first.next;

    // swap
    prev.next = second;
    first.next = second.next;
    second.next = first;

    // move prev forward (to the end of the swapped pair)
    prev = first;
  }

  return dummy.next;
}

/*
When a linked-list problem asks you to modify structure:

Do I need a dummy head? (head might change → yes)

Do I need prev? (deleting/swapping requires node-before)

Do I need to save next? (if I’m changing .next, usually yes)

What pointer moves after mutation? (often prev = first or curr = next)
*/

// Start here
function practice() {
  console.log("day03_pointer_rewiring_practice.js ready");
}

practice();
