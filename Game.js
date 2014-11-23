var Game = function() {
    this.gameOver = false;
    this.cells = new Cells();

};

Game.prototype.handleClick = function handleClick(index) {
    if (game.gameOver) return {};
    return {
        symbol : game.cells.setCell(index),
        line : game.checkForLines()
    }
};

Game.prototype.checkForLines = function () {
    var line = game.cells.spotLine();
    if (line.length > 0)
        game.gameOver = true;
    return line;
};
