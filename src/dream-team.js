const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if( !Array.isArray(members) ){
   return false
}  else{
let stack =[];

for(let numb of members){

    if(typeof numb === "string" ){

      let arr = numb.trim().toUpperCase().split('')
      stack.push(arr[0])
      
    }
    }
return (stack.sort().join(''))
}
};
