function selectionSort(array) {
  // Write your code here.
  let sortedPointer = -1;
  while (sortedPointer < array.length - 1) {
    let smallestPointer = sortedPointer + 1;
    for (let x = sortedPointer + 1; x < array.length; x++) {
      if (array[smallestPointer] > array[x]) {
        smallestPointer = x;
      }
    }
    swap(sortedPointer + 1, smallestPointer, array);
    sortedPointer++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
