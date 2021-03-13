const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  //undefined = ''
  //options.toString()
  
  let repeatTimes = options.repeatTimes
  let separator = options.separator
  
  let addition = options.addition
  let additionRepeatTimes = options.additionRepeatTimes
  let additionSeparator = options.additionSeparator
  
  if(options.separator){
      options.separator
      
   } else {
     separator= '+'
    
     } 
   
      if(addition === undefined){
      addition = ''
    } else{
      '' }
    
     if(additionSeparator){
    additionSeparator
   } else {additionSeparator ='|' }

  
      
      let addString = addition + additionSeparator
  
      let addStringFin = ''
      while(additionRepeatTimes-- > 1) addStringFin += addString;
      addStringFin1 =addStringFin + addition
      let x = addStringFin1
  
      let stringSep = str + x + separator
      let stringSepFin = ''
      while(repeatTimes-- > 1) stringSepFin += stringSep;
      let stringSepFin1 = stringSepFin + str + x

    return stringSepFin1
      
          
  
  
  }
  






  