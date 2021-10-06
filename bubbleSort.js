function bubbleSort(array) {
  // Write your code here.
  //We start the sort as false;
  let sorted = false;
  //Counter will reduce the size the array from left to right that way
  //When the biggest number is at the end the loop on the next pass will
  //finish on array.length-1-counter;
  let counter = 0;

  //This will keep looping until sorted is true.
  while (!sorted) {
    //We change sorted to true
    sorted = true;
    //Loop through al lthe array and swap the elements that needs to be swaped.
    //then we change sorted to false. since we swap.
    for (let x = 0; x < array.length - 1 - counter; x++) {
      if (array[x] > array[x + 1]) {
        const temp = array[x + 1];
        array[x + 1] = array[x];
        array[x] = temp;
        sorted = false;
      }
    }
    //When the loops finishes it increase the counter by 1
    //Then it will loop again if the sorted is false.

    counter++;
  }
  return array;
}
