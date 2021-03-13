const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date = 'no-value')  {
if(date === 'no-value'){
  return 'Unable to determine the time of year!';
}
if (date instanceof Date){
  if(Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Caught fake date!');

  const month = date.getMonth();
  if(month === 0 || month === 1 || month === 11){
    return 'winter'    
  }
  if(month === 2 || month === 3 || month === 4){
    return 'spring'    
  }
  if(month === 5 || month === 6 || month === 7){
    return 'summer'    
  }
  if(month === 8 || month === 9 || month === 10){
    return 'autumn'    
  }

}
throw new Error('Wrong argument passed!');
};
