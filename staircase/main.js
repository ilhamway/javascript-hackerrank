// Staircase
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  // Write your code here
  // TODO: answer here
  let result = ''

  for(let i = n; i > 0; i--){
    for(let j = 1; j <= n; j++){
      if(j >= i){
        result += '#'
      }else{
        result += ' '
      }
      
    }
    result += '\n'
  }

  return result
}

function main() {
  const n = 6

  let result = staircase(n);
  console.log(result)
}

main(); // execute program

module.exports = staircase