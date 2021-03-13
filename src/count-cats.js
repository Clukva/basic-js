const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let array = [].concat(...matrix)
 
  console.log(array)  

 let n = 0;
 for (let elem of array) {
     if (elem == "^^") {
         n = n + 1 ; 
           } 
        // return n
      }
      return n
    }      
 
 

    