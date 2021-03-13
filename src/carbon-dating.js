const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  let sampleActiv = /* parseFloat */(sampleActivity)
  
  if(typeof(sampleActivity) ==='string' && sampleActivity > 0 && sampleActivity < 15){

  let koef = (sampleActiv/MODERN_ACTIVITY)
   
  let koefE =(0.693/HALF_LIFE_PERIOD)

  let result = parseFloat(Math.log(koef)/koefE)
  

  return Math.ceil(-result)

} else if(sampleActivity === 3){
  return false
}
else {
  return false
}



};
