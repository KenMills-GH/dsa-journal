import { strict as assert } from "node:assert";
import { factorial } from "../practice/day07_recursion_practice.js";

test("factorial()", () => {
  assert.equal(factorial(1), 1); // Base case
  assert.equal(factorial(2), 2); // 2 * 1
  assert.equal(factorial(3), 6); // 3 * 2 * 1
  assert.equal(factorial(5), 120);
});
