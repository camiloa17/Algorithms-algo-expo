function sortedSquaredArrayMapSort(array) {
  return array.map((number) => Math.pow(number, 2)).sort((a, b) => a - b);
}

/**
 *
 * It takes the smallestValue and largest number of the array and compare them.
 * The for loops goes in descending order to following the largest indexes first so highest numbers.
 * Then it compares if the smalles is larger than the largest, if it is it will put it on the current idx of the loop
 * And it will increase the smallest index by one.
 * else it will insert in the current index the larges value.
 * Here we use the absolute value since we can have negatives numbers that are bigger than the larges value in the array
 */
function sortedSquaredArray(array) {
  // Write your code here.
  let small = 0;
  let large = array.length - 1;
  const answer = new Array(array.length).fill(0);

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallVal = array[small];
    const largeVal = array[large];

    if (Math.abs(smallVal) > Math.abs(largeVal)) {
      answer[idx] = smallVal * smallVal;
      small++;
    } else {
      answer[idx] = largeVal * largeVal;
      large--;
    }
  }
  return answer;
}
