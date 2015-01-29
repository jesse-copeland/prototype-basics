describe("Array.prototype.toStringNew, ", function() {
  it("should have the prototype 'toStringNew'.", function() {
    expect(Array.prototype.toStringNew).to.be.a('function');
  });

  it("should return the contents of the array instance as a string. If elements are null or a function, they should be excluded from the results.", function() {
    var testArray = ['string', 10, {key: "value"}, true, function hello () {console.log("Hello");}, 'second', null, undefined, 100, 'last'];  
    var result = 'string,10,[object Object],true,second,undefined,100,last';

    expect(testArray.toStringNew()).to.be.equal(result);
  });
  
});

describe("Array.prototype.forEachNew,", function() {
  it("should have the prototype 'forEachNew'", function() {
    expect(Array.prototype.forEachNew).to.be.a('function');
  });

  it("should take a function as an argument and call it against each element in the array.", function() {
    var testArray = [1 , 'two', true, {key: 'val'}, function hello () {console.log('Hello');}, null, undefined, NaN];
    var testCb = function (val) {
      var results = val + ' => ' + typeof val;
      var testProof = ["1 => number", "two => string", "true => boolean", "[object Object] => object", "function hello() {console.log('Hello');} => function", "null => object", "undefined => undefined", "NaN => number"];
      return results;
    };

    var testResult = testArray.forEachNew(testCb);

    expect(testResult).to.deep.equal(testProof);
    
  });
});

describe("String.prototype.wtf,", function() {
  it("should have the prototype 'wtf'", function() {
    expect(String.prototype.wtf).to.be.a('function');
  });

  it("should return WTF for any given context", function() {
    var testString1 = 'Jesse';
    var testString2 = '$*lkdjf!';
    var testString3 = 'Four score and seven years...';

    expect(testString1.wtf()).to.be.equal('WTF?!');
    expect(testString2.wtf()).to.be.equal('WTF?!');
    expect(testString3.wtf()).to.be.equal('WTF?!');

  });
  
});

describe("String.prototype.scramble", function() {
  it("should have the prototype 'scramble'", function() {
    expect(String.prototype.scramble).to.be.a('function');
  });

  it("should return the same number of characters that the context had.", function() {
    var testString = 'abcdefghijklmnopqrstuvwxyz';
    var testStrLen = testString.length;
    var testResult = testString.scramble();
    console.log('string', testResult);
    expect(testResult).to.have.length(testStrLen);
  });
});

describe("String.prototype.trimFrontBack", function() {
  it("should have the prototype 'trimFrontBack'", function() {
    expect(String.prototype.trimFrontBack).to.be.a('function');
  });  

  it("should return the context string with any leading or trailing spaces trimmed.", function() {
    var testString = '     Jesse Copeland     ';
    var testProof = 'Jesse Copeland';

    expect(testString.trimFrontBack()).to.be.equal(testProof);
  });

  it("should remove only spaces from beginning and end of sentence.", function() {
    var testString = '        That\'s no moon. It\'s a space station.          ';
    var testProof = 'That\'s no moon. It\'s a space station.';

    expect(testString.trimFrontBack()).to.be.equal(testProof);
  });
  
});

