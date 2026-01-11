// 1) Implement a Stack (array-backed)
// dsa/helpers/stack.js

export class Stack {
  constructor() {
    this._data = [];
  }

  push(x) {
    this._data.push(x);
  }

  pop() {
    return this._data.length === 0 ? null : this._data.pop();
  }

  peek() {
    return this._data.length === 0 ? null : this._data[this._data.length - 1];
  }

  isEmpty() {
    return this._data.length === 0;
  }

  size() {
    return this._data.length;
  }

  clear() {
    this._data.length = 0;
  }

  toArray() {
    // bottom -> top
    return this._data.slice();
  }
}

// Optional: MinStack helper (O(1) getMin)
export class MinStack {
  constructor() {
    this._stack = [];
    this._mins = [];
  }

  push(x) {
    this._stack.push(x);
    const newMin =
      this._mins.length === 0
        ? x
        : Math.min(x, this._mins[this._mins.length - 1]);
    this._mins.push(newMin);
  }

  pop() {
    if (this._stack.length === 0) return null;
    this._mins.pop();
    return this._stack.pop();
  }

  top() {
    return this._stack.length === 0
      ? null
      : this._stack[this._stack.length - 1];
  }

  getMin() {
    return this._mins.length === 0 ? null : this._mins[this._mins.length - 1];
  }

  isEmpty() {
    return this._stack.length === 0;
  }

  size() {
    return this._stack.length;
  }
}
