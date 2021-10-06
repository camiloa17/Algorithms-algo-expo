function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let arr1Pointer = 0;
  let arr2Pointer = 0;

  const answer = [arrayOne[0], arrayTwo[0]];
  let lowest = Math.abs(arrayOne[0] - arrayTwo[0]);

  while (arr1Pointer < arrayOne.length && arr2Pointer < arrayTwo.length) {
    const valArr1 = arrayOne[arr1Pointer];
    const valArr2 = arrayTwo[arr2Pointer];
    const diff = Math.abs(valArr1 - valArr2);
    if (diff < lowest) {
      answer[0] = valArr1;
      answer[1] = valArr2;
      lowest = diff;
    }
    if (valArr1 < valArr2) {
      arr1Pointer++;
    } else if (valArr2 < valArr1) {
      arr2Pointer++;
    } else {
      return [valArr1, valArr2];
    }
  }
  return answer;
}
