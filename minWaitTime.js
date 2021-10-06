//This is when we get an array of timers and we want to find the lowest wait time.
function minimumWaitingTime(queries) {
  // Write your code here O(n log(n)).
  //We sort the array,
  queries.sort((a, b) => a - b);
  let minWaitTime = 0;

  for (let x = 0; x < queries.length - 1; x++) {
    //we assaign a duration.
    let duration = queries[x];
    /**
     * Sine we are looking at the timer and the remaining elements needs to sum this timer we multiply the duration of the current
     * element to the remaining elements in the array. Thats why we use queries.length - (x-1). So the remaining elements decreases
     * as we traverse the array.
     *
     */
    minWaitTime += duration * (queries.length - (x + 1));
  }
  return minWaitTime;
}
