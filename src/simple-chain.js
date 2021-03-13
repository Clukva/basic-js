const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  makeChain: [],
  getLength() {
     return this.makeChain.length;
  },

  addLink(value) {
    this.makeChain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
            if(this.checkIntNumb(position)){
                   if (position < 1 || position > this.getLength()){
                   this.delChain();
                    throw new Error ('Removing link position is out of range!');
                   }
            const ind = position - 1;
            this.makeChain.splice(ind, 1);
            return this;
           }
      this.delChain();
      throw new Error ('Position must be integer number!');
  },

  reverseChain() {
    this.makeChain.reverse();
    return this;
   },

  finishChain() {
    const chain = this.makeChain.join('~~');
    this.delChain();
    return chain;
  },

  delChain(){
    this.makeChain.length = 0;
  },

  checkIntNumb(num){
    return typeof num ==='number' && (num = 0) === num;
  },
 
};

module.exports = chainMaker;
