

function functionName(str) {


    var res = str.split(" ");//one space allows the string to be split up between each space there is in the the string.
  var wordLength = 0; //the variable is set and initialized at zero
for (var b = 0; b < res.length; b++) {//the for loop
 if (res[b].length> wordLength) {//compares itself to find the longest word
  wordLength = res[b].length;//the longest word is set to the new variable "wordLength"

 }
}
return wordLength;//returning the longest word
}
   console.log(functionName("hello there a little turtle galloping"));
