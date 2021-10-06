//[8, 5, 2, 9, 5, 6, 3]
//5<8 true
//J=1;
//j--=0
//[5, 8, 2, 9, 5, 6, 3]
//idx=2;
//j=2;
//2<8 true
//[5, 2, 8, 9, 5, 6, 3]
//j--=1
//j>0 && 2<5
//[2, 5, 8, 9, 5, 6, 3]
//j--=0
//idx=3
//j=3
//9<8 false;
//idx=4
//5<9 true
//j=4
//[2, 5, 8, 5, 9, 6, 3]
//j=3
//5<8 true
//[2, 5, 5, 8, 9, 6, 3]
//j=2
//5<5 false
//idx=5

function insertionSort(array) {
  // Write your code here.
  for (let idx = 1; idx < array.length; idx++) {
    let j = idx;
    while (j > 0 && array[j] < array[j - 1]) {
      console.log(j, array[j], array[j - 1]);
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;
}
