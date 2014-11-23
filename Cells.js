var Cells = function() {
    this.array = ['', '', '', '', '', '', '', '', ''];
    this.symbol = new Symbol();
};

Cells.prototype.setCell = function setCell(index) {
    var sym = this.symbol.getNext();
    this.array[index] = sym;
    return sym;
};

Cells.prototype.spotLine = function spotLine() {
    //not really interested in this logic, do this is quick and dirty
    if (this.array[0] != '' && this.array[0] == this.array[1] && this.array[1] == this.array[2]) return [0,1,2];
    if (this.array[3] != '' && this.array[3] == this.array[4] && this.array[4] == this.array[5]) return [3,4,5];
    if (this.array[6] != '' && this.array[6] == this.array[7] && this.array[7] == this.array[8]) return [6,7,8];
    if (this.array[0] != '' && this.array[0] == this.array[3] && this.array[3] == this.array[6]) return [0,3,6];
    if (this.array[1] != '' && this.array[1] == this.array[4] && this.array[4] == this.array[7]) return [1,4,7];
    if (this.array[2] != '' && this.array[2] == this.array[5] && this.array[5] == this.array[8]) return [2,5,8];
    if (this.array[0] != '' && this.array[0] == this.array[4] && this.array[4] == this.array[8]) return [0,4,8];
    if (this.array[2] != '' && this.array[2] == this.array[4] && this.array[4] == this.array[6]) return [2,4,6];
    return [];
};

