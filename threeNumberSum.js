/**
 * 
 *output [
  [-8, 2, 6],
  [-8, 3, 5],
  [-6, 1, 5]
] 
input "array": [12, 3, 1, 2, -6, 5, -8, 6]
targetSum:0
 */

function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);

  const answer = [];
  for (let x = 0; x < array.length - 2; x++) {
    let leftPointer = x + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      const left = array[leftPointer];
      const curr = array[x];
      const right = array[rightPointer];
      const sum = curr + left + right;
      if (sum === targetSum) {
        answer.push([curr, left, right]);
        leftPointer++;
        rightPointer--;
      } else if (sum < targetSum) {
        leftPointer++;
      } else if (sum > targetSum) {
        rightPointer--;
      }
    }
  }

  return answer;
}
