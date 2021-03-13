const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let turns1 = (2**disksNumber)-1

  let seconds1 = Math.floor((3600/turnsSpeed)*turns1)
  //Math.floor(seconds)
  let obj = { turns: turns1, seconds: seconds1}
  return obj//.turns, obj.seconds







};
