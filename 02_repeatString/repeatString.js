const repeatString = function(string, num) {
   for (var i=1; i<=5;i++){
       if (num < 0){ return("ERROR")}
       else {return(string.repeat(num))}
   }
}
console.log(repeatString("hey",-1))
// Do not edit below this line
module.exports = repeatString;

