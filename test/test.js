var assert = require('assert');
var productOfFive = require('../main').productOfFive;
var multiply = require('../main').multiply;

describe('Product of Five', function() {
  describe('#productOfFive()', function() {
    it('should return an error when the length is shorter than 5', function() {
      assert.equal("number must be at least 5 digits", productOfFive(111));
    });
    it('should work with a number that has a length of 5', function() {
      assert.equal(20, productOfFive(12215));
    });
    it('should work with numbers larger than 5 digits', function() {
      assert.equal(256, productOfFive(222444));
      assert.equal(640, productOfFive(2225444));
      assert.equal(162, productOfFive(111333321));
    });
    it('should check for large numbers and let user know to pass a string', function() {
      assert.equal("large numbers must be passed as a string", productOfFive(11112344564299999));
    });
    it('should work with large numbers', function() {
      assert.equal(59049, productOfFive("11112344564299999"));
    });
  });
});
