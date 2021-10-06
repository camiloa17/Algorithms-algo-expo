function binarySearch(array, target) {
  //This is done using recursion.
  /**
   * We pass the helper the array the target, left pointer and right pointer.
   */
  return binaryHelper(array, target, 0, array.length - 1);
}

function binaryHelper(array, target, pointerLeft, pointerRight) {
  //We need to get the middle index for the two pointers.
  const middle = Math.floor((pointerLeft + pointerRight) / 2);
  //We get the middle Element
  const middleEl = array[middle];
  //If the pointer of the left if higher than the right we did not found the element.
  if (pointerLeft > pointerRight) {
    return -1;
  }
  //If the target is higher than the middle we need to look from the middle to the right of the array.
  if (target > middleEl) {
    //We pass call this function again and pass over the array, target, middle+1 and the same right pointer.
    return binaryHelper(array, target, middle + 1, pointerRight);
  }
  //If the target is less than the middle we just need the array from the middle to the left.
  else if (target < middleEl) {
    //For this we pass the same leftPointer and the right pointer becomes te middle-1.
    return binaryHelper(array, target, pointerLeft, middle - 1);
  }
  //If the middleElement is the same as target we found the element.
  else if (middleEl === target) {
    return middle;
  }
}
