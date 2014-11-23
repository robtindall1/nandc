var assert = require("assert")

var Symbol_js = require('../Symbol.js')
var Symbol = Symbol_js._test.Symbol;

describe('Symbol', function(){
  describe('#getNext()', function() {
      it('first call returns a nought', function () {
          var symbol = new Symbol();
          assert.equal(symbol.getNext(), symbol.NOUGHT);
      });
      it('next calls alternate nought & cross', function () {
          var symbol = new Symbol();
          assert.equal(symbol.getNext(), symbol.NOUGHT);
          assert.equal(symbol.getNext(), symbol.CROSS);
          assert.equal(symbol.getNext(), symbol.NOUGHT);
          assert.equal(symbol.getNext(), symbol.CROSS);
      });
  })
});