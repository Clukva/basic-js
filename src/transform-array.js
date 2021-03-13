
const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr) {
 
  const cases = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];
 
  const nArr = [];

  if ( arr instanceof Array ) {

    function check(elem, cases) {
      return cases.indexOf(/* String */(elem)) < 0;
    }

    for(let i = 0; i < arr.length; i++) {
      if(check(arr[i] , cases)) {
        nArr.push(arr[i])

      } else {
        switch (arr[i]) {
          case cases[0]:
            i+=1;
            break;

          case cases[1]:
            if( arr[i-2] === '--discard-next'){
             break;
          }    
            if( arr[i-1] !== NaN){
            nArr.pop()
            break;
          }  

          nArr[nArr.length - 1] === arr[i - 1] ? nArr.pop() : false;
          break;

          case cases[2]:
          
            nArr.push(arr[i + 1]);
            break;



          case cases[3]:
            if( arr[i-2] === '--discard-next'){
              break;
             }   
              nArr.push(arr[i - 1]);
            break;
        }
      }
      
    };
    return nArr.filter(i => check(i, cases) && i !== undefined)

  } else {
    throw new Error("argument is not an Array")
  }
};

