export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export function fromArray(arr) {
  let head = null;
  let tail = null;

  for (const v of arr) {
    const node = new Node(v);
    if (!head) head = node;
    else tail.next = node;
    tail = node;
  }
  return head;
}

export function toArray(head) {
  const out = [];
  let cur = head;
  while (cur) {
    out.push(cur.value);
    cur = cur.next;
  }
  return out;
}

export function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

export function getNodeAt(head, idx) {
  if (idx < 0) return null;
  let cur = head;
  let i = 0;
  while (cur && i < idx) {
    cur = cur.next;
    i++;
  }
  return cur;
}

export function getTail(head) {
  if (!head) return null;
  let cur = head;
  while (cur.next) cur = cur.next;
  return cur;
}

export function connectTailTo(head, node) {
  // Attaches the tail of `head` to `node` and returns head.
  // If head is null, returns node.
  if (!head) return node;
  const tail = getTail(head);
  tail.next = node;
  return head;
}

export function makeCycle(head, startIndex) {
  // Utility for cycle tests/debugging:
  // connects tail.next to node at startIndex.
  // If invalid, returns head unchanged.
  if (!head) return null;
  const startNode = getNodeAt(head, startIndex);
  if (!startNode) return head;
  const tail = getTail(head);
  tail.next = startNode;
  return head;
}

export function listLength(head) {
  // TODO: return 0 for null
  if (!head) return 0;
  let current = head;
  let count = 0;

  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}
