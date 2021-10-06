//For summing the branches we will do recursion.

function branchSums(root) {
  // holds the sum of each branch.
  const allSums = [];
  //We pass the root element and the allSums array and the sum at 0;
  sumOfBranch(0, root, allSums);
  return allSums;
}
function sumOfBranch(sum, node, allSums) {
  //We sum the node value to the sum.
  const newSum = sum + node.value;
  //If the node has a left element we call this function again with the new sum.
  if (node.left) {
    sumOfBranch(newSum, node.left, allSums);
  }
  //If the node has a right element we call this function again with the new sum
  if (node.right) {
    sumOfBranch(newSum, node.right, allSums);
  }
  //If there is no nodes on left or right we pus the new sum to the array since we arrived to the end.

  if (!node.left && !node.right) {
    allSums.push(newSum);
  }
}
