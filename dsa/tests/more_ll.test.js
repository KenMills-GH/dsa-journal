import assert from "node:assert/strict";
import test from "node:test";

test("isValid()", () => {
  assert.equal(isValid("()"), true);
  assert.equal(isValid("()[]{}"), true);
  assert.equal(isValid("(]"), false);
  assert.equal(isValid("([)]"), false);
  assert.equal(isValid("{[]}"), true);
  assert.equal(isValid("["), false); // Stack won't be empty at the end
});
