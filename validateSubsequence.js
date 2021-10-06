/**
 * 
 
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.} array 
  ex array=[5, 1, 22, 25, 6, -1, 8, 10]
  ex sub=[1, 6, -1, 10]
 */

function isValidSubsequence(array, sequence) {
  let indexSeq = 0;
  for (const num of array) {
    if (indexSeq === sequence.length) {
      break;
    }
    if (num === sequence[indexSeq]) {
      indexSeq++;
    }
  }
  return indexSeq === sequence.length;
}
