// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  let time = ""
  let format = s.substring(8,10)
  let hour = parseInt(s.substring(0,2))

  if(format == "PM"){
    hour += 12
    time = hour + s.substring(2,8)
  }
  else if(format == "AM"){
    if(hour==12){
      hour -= 12
    }
    time = '0' + hour + s.substring(2,8)
  }
  return time
}

function main() {
  //var s = readLine();
  var s = '08:20:50AM'; // override input
  var result = timeConversion(s);
  console.log(result);
}

main(); // execute program

module.exports = timeConversion