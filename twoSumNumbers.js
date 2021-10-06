/**
 * 
 *
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
 */

// time complexity is O(N^2)
function solutionTwoForLoops(array,targetSum){
 
  for(let x =0;x<array.length;x++){
    for(let y=0; x<array.length;y++){
      if(x===0){
        continue;
      }
      if(array[x]+array[y]===targetSum){
        return[array[x],array[y]];
      }
    }
  }
  return[]
}

// time complexity O(n log n)
function solutionLeftAndRight(array,targetSum){
  //time complexity = O(nlog(n))
  array.sort((a,b)=>a-b);
	let left=0;
  let right=array.length-1;
  //time complexity = o(n)
  while(left < right){
    const currSum=array[left]+array[right];
    if(currSum===targetSum){
      return[array[left],array[right]];
    }else if(currSum<targetSum){
      left++;
    }else if(currSum>targetSum){
      right--;
    }
  }
  return []
}

//With has table nums.
/**
 * 
 * Here we are going with the premis that x+y=targetSum so targetSum-x=y
 * We are inserting our numbers in the hash table and if the potential match is in the hash table
 * then the num and the potential number are the answer.
 */
function solutionHashTable(array,targetSum){
  const nums={};

  for (const num of array){
    const potentialMatch = targetSum - num;

    if(potentialMatch in nums){
      return [potentialMatch,num];
    }else{
      nums[num]=true;
    }
  }
  return[];
}