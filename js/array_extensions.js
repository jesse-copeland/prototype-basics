Array.prototype.toStringNew = function () {
  var result = '';
  var re = /,$/;

  for (var i = 0; i < this.length; i++) {
    if (this[i] === null || typeof this[i] === 'function') {
      continue;
    }
    result = result.concat(this[i],',');
  }
  return result.replace(re, '');
};

Array.prototype.forEachNew = function (cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
  return;
};