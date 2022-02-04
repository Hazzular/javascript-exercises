
    const removeFromArray = function(arr, ...args) {
        let a = arr;
        let b = args;
        let c = a.filter(d => !b.includes(d));
        return(c)
      };
    

var ar = [1, 2, 3, 4, 5, 6]
console.log(removeFromArray(ar,5,6))
// Do not edit below this line
module.exports = removeFromArray;
