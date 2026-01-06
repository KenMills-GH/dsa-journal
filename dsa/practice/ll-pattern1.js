import { Node } from '../helpers/ll.js';

export function length(head) {
  let n = 0;
  let cur = head;
  while (cur) {
    n++;
    cur = cur.next;
  }
  return n;
}

export function sumUntil(head, stopVal) {
  let sum = 0;
  let cur = head;
  while (cur) {
    if (cur.value === stopVal) break;
    sum += cur.value;
    cur = cur.next;
  }
  return sum;
}
