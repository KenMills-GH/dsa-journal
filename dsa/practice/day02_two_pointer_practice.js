// day02_two_pointer_practice.js
// Practice problems for Day 02 — two-pointer
// Created: 2026-01-08
// Author: PC
import { listLength, Node, reverse } from "../helpers/ll.js";

// Start here
export function middleValue(head) {
  // Return the middle node's value.
  // If even length, return the SECOND middle.
  // Examples:
  // [1,2,3] -> 2
  // [1,2,3,4] -> 3

  if (head === null) return null;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

export function hasCycle(head) {
  // Return true if the list has a cycle, else false

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

export function cycleStartValue(head) {
  // If there is a cycle, return the value where the cycle starts.
  // If no cycle, return null.

  let slow = head;
  let fast = head;

  // 1) Find meeting point (if cycle exists)
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // 2) Find cycle start
      let p1 = head;
      let p2 = slow;

      while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
      }

      return p1.value; // cycle start
    }
  }

  return null; // no cycle
}

export function kthFromEndValue(head, k) {
  // Return the value of the node that is k positions from the end (0-based).
  // k=0 => last node
  // If k is out of range or head is null, return null.
  // Examples:
  // [10,20,30,40], k=0 -> 40
  // [10,20,30,40], k=2 -> 20
  if (!head || k < 0) return null;

  let slow = head;
  let fast = head;

  // move fast k steps ahead
  for (let i = 0; i < k; i++) {
    if (fast === null) return null; // out of range
    fast = fast.next;
  }
  if (fast === null) return null; // k exactly equals length

  // move both until fast is at the last node
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.value;
}

export function isPalindrome(head) {
  // Return true if the linked list values form a palindrome, else false.
  // You may modify the list during the check (we won't test restoration today).
  if (head === null) return true;

  // 1) find middle (second middle for even)
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 2) reverse second half starting at slow
  let second = reverse(slow);

  // 3) compare
  let first = head;
  while (second !== null) {
    if (first.value !== second.value) return false;
    first = first.next;
    second = second.next;
  }

  return true;
}

// 1) Two pointers + gap
export function kthFromStartValue(head, k) {
  // Return value at index k (0-based) from the start.
  // If out of range, return null.
  if (!head || k < 0) return null;

  let fast = head;

  // move fast k steps ahead
  for (let i = 0; i < k; i++) {
    if (fast === null) return null; // out of range
    fast = fast.next;
  }
  if (fast === null) return null;
  return fast.value;
}

// 2) Two pointers + alignment
export function intersectionValue(headA, headB) {
  // Return the value of the first intersecting node by reference.
  // If no intersection, return null.
  if (!headA || !headB) return null;

  const lenA = listLength(headA);
  const lenB = listLength(headB);

  let pA = headA;
  let pB = headB;

  // TODO: advance the pointer of the longer list by diff
  const diff = Math.abs(lenA - lenB);

  if (lenA > lenB) {
    for (let i = 0; i < diff; i++) pA = pA.next;
  } else {
    for (let i = 0; i < diff; i++) pB = pB.next;
  }

  // TODO: walk together until you find the same node reference
  while (pA && pB) {
    if (pA === pB) return pA.value;
    pA = pA.next;
    pB = pB.next;
  }
  return null;
}

// 3) Fast/slow variant: remove middle (second middle for even)
export function deleteMiddle(head) {
  // Delete the middle node and return the (possibly new) head.
  // For even length, delete the SECOND middle.
  // If list empty -> null. If 1 node -> null.

  if (!head || head.next === null) return null;

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // delete slow
  prev.next = slow.next;

  return head;
}

// 4) Two pointers: partition
export function partition(head, pivot) {
  // Reorder nodes so all nodes with value < pivot come before nodes >= pivot.
  // Keep relative order within each group (stable).
  // Return new head.
  if (!head) return null;

  const lessDummy = new Node(null);
  const geDummy = new Node(null);

  let lessTail = lessDummy;
  let geTail = geDummy;

  let current = head;

  while (current) {
    const next = current.next; // save next
    current.next = null;

    if (current.value < pivot) {
      lessTail.next = current;
      lessTail = current;
    } else {
      geTail.next = current;
      geTail = current;
    }
    current = next;
  }

  // Combine the two lists
  lessTail.next = geDummy.next;
  geTail.next = null; // Important to avoid cycle

  return lessDummy.next;
}

// 5) Two pointers: reverse in k-group (pointer rewiring)
export function reverseKGroup(head, k) {
  // Reverse nodes in groups of size k and return new head.
  // If last group has < k nodes, leave it as-is.
  // k <= 1: return head
  if (!head || k <= 1) return head;

  const dummy = new Node(null);
  dummy.next = head;

  let groupPrev = dummy;

  while (true) {
    // 1) Check if there are k nodes left
    let kth = groupPrev;
    for (let i = 0; i < k; i++) {
      kth = kth.next;
      if (!kth) return dummy.next; // not enough nodes, return
    }

    // 2) Reverse k nodes
    let groupNext = kth.next;
    let prev = groupNext;
    let curr = groupPrev.next;

    for (let i = 0; i < k; i++) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    // 3) Connect with previous part
    const temp = groupPrev.next; // new end of the reversed group
    groupPrev.next = kth; // new start of the reversed group
    groupPrev = temp; // move groupPrev to the end of the reversed group
  }
}

function practice() {
  console.log("day02_two_pointer_practice.js ready");
}

practice();
