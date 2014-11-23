var Symbol = function() {
    this.NOUGHT = "nought";
    this.CROSS = "cross";
    this.currentSymbol = this.CROSS;
};

Symbol.prototype.getNext = function getNext() {
    this.currentSymbol = (this.currentSymbol == this.CROSS) ? this.NOUGHT : this.CROSS;
    return this.currentSymbol;
};

exports._test = {
    Symbol: Symbol
}