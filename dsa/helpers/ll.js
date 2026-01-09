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

export function makeCycle(values, startIndex) {
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

export function makeIntersectingLists(
  aVals,
  bVals,
  sharedVals,
  aJoinIdx,
  bJoinIdx
) {
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
