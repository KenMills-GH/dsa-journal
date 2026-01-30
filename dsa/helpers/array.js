/**
 * Common Array Utilities
 */

// Swaps two elements in an array in-place
export const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

// Reverses an array between two indices (inclusive)
export const reverse = (arr, start, end) => {
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
};

// Useful for debugging
export const printArray = (arr) => console.log(`[${arr.join(", ")}]`);
