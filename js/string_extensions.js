String.prototype.wtf = function () {
  var re = /.*/;
  return this.replace(re, 'WTF?!');  
};

String.prototype.scramble = function () {
  var stringArr = this.split('');
  var tmpArr = [];
  
  function rndIntInRange (range) {
    return Math.floor(Math.random()*range);
  }

  while (stringArr.length > 0){
    var cutChar = stringArr.splice(rndIntInRange(stringArr.length),1);
    tmpArr.push(cutChar);
  }

  return tmpArr.join('');

};

String.prototype.trimFrontBack = function () {

  return this.replace(/^\s+|\s+$/g, '');
  
};
