//Fibonacci is F(x-2)+f(x-1); so F(0)=0 and F(1)=1 and F(2)=0+1=1; and F(3)= 1+1=2; 0,1,1,2,3,5,8...n

function getNthFib(n) {
  // an array to keep the sums
  const sum = [];
  //We loop until the number passed in n.
  for (let x = 0; x < n; x++) {
    if (x === 0) {
      sum.push(x);
    } else if (x === 1 || x === 2) {
      sum.push(1);
    } else {
      sum.push(sum[x - 2] + sum[x - 1]);
    }
  }

  return sum[n - 1];
}
