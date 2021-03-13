const CustomError = require("../extensions/custom-error");

const arrayNew = (arr) => arr.some(item => Array.isArray(item));

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    
      if ( arrayNew(arr)){
            
        const newArr = arr.reduce((acc,cur) => acc.concat(cur), []);

        return  result + this.calculateDepth(newArr);
          
        } 
          return result;
        
      }
      
  }
         