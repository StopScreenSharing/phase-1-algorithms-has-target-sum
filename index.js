function hasTargetSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  the outer loop would have to iterate over the array n amount of times 
  the inner loop would hav to iterate over the array n /2 amount of times, and it decreases as the outer loop increases
  o(n^2)
*/

/* 
  Add your pseudocode here
  for let loop for 
  for let loop for j 
  if else method for result
*/

/*
  Add written explanation of your solution here
  the function needs to iterate over an array,
  find a pair of numbers that add up to the target,
  return true if two of any pair of numbers add up to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
