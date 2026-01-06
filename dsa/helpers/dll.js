export class DNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export function fromArray(arr) {
  let head = null;
  let tail = null;
  for (const v of arr) {
    const node = new DNode(v);
    if (!head) head = node;
    else {
      tail.next = node;
      node.prev = tail;
    }
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
