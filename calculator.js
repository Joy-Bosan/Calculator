//Algorithm
//display digits
//perform operation
//display result

var collectNums;
//displays the digits to the screen
function displayDigits(digit){
    //var digitValue = digit.value
    document.getElementById("inputs").innerHTML += digit.value; //innerHTML is used to insert  elements into id *in a div NOTE that += means appending
}



// perform the arithmetic operation
function doAdd(){
collectNums = document.getElementById("inputs").innerHTML; //value is used to access inputs, hence to access a div we use innerHTML
  let all = collectNums.split("+");
  let allNumbers = all.map(Number);
  console.log(allNumbers); // all numbers here gives us array of numbers
  var additionResult = allNumbers.reduce(function(total, num){
      return total + num;
  }); //reduce is to reduce all the array to one value that is adding all together in this case, the function inside the parenthesis is to call back. total is where it should start from, num is where it should start from
  function doMinus(){
      collectNums = document.getElementById("inputs").innerHTML;
      let n = collectNums.split("-");
      let
  }
console.log(additionResult);
displayFinalResult(additionResult);
}
//displays the final result
function displayFinalResult(result){
    document.getElementById("inputs").innerHTML = result;
}
function clear(){
    document.getElementById('inputs').innerHTML = '';
}