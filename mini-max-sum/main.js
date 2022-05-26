// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  let result = ""
  let minSum = 0
  let maxSum = 0
  let sum = 0

  for(let i=0; i < arr.length; i++){
    sum += arr[i]
  }

  minSum = sum - Math.max(...arr)
  maxSum = sum - Math.min(...arr)
  result = minSum + " " + maxSum

  return result
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum