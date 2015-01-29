Number.prototype.double = function () {
  return this * 2;
};

Number.prototype.tripleDouble = function () {
  return (this * 2) * 3;
};

Number.prototype.isDivisibleBy = function (divisor) {
  return  (this % divisor) === 0;
};

Number.prototype.subMultiAdDivide = function (num) {
  function randOp () {
    var operations = ['add', 'sub', 'multi', 'div' ];
    return operations[Math.floor(Math.random() * 4)];
  }

  var that = this;
  var execOps = [randOp()];
  execOps.push(randOp());
   
  for (var i = 0; i < execOps.length; i++) {
     
    switch (execOps[i]) {
      case 'add':
        that = that + num;
        break;
      case 'sub':
        that = that - num;
        break;
      case 'multi':
        that = that * num;
        break;
      case 'div':
        that = that / num;
        break;
    }
   } 
  
  return that;

};