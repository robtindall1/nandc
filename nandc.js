/**
 * Created by Rob on 16/11/2014.
 */
var NOUGHT = "nought";
var CROSS = "cross";
var HIGHLIGHT = "highlight";

var array = ['', '', '', '', '', '', '', '', ''];
var currentSymbol = CROSS;
var gameOver = false;

$(function() {
    $( "#myTable td" ).click(function(event) {
            handleTdClick(event.target);
        }
    );
});

function handleTdClick(td) {
    if (gameOver) return;
    var index = td.getAttribute("index");
    if (array[index] == '') {
        putSymbolInCell(td, index);
        checkForLines();
    }
}

function putSymbolInCell(td, index) {
    var sym = getNext();
    td.className = sym;
    array[index] = sym;
}

function checkForLines() {
    var line = spotLine();
    if (line != null) {
        highlightLine(line);
        gameOver = true;
    }
}

function spotLine() {
    //not really interested in this logic, do this is quick and dirty
    if (array[0] != '' && array[0] == array[1] && array[1] == array[2]) return [0,1,2];
    if (array[3] != '' && array[3] == array[4] && array[4] == array[5]) return [3,4,5];
    if (array[6] != '' && array[6] == array[7] && array[7] == array[8]) return [6,7,8];
    if (array[0] != '' && array[0] == array[3] && array[3] == array[6]) return [0,3,6];
    if (array[1] != '' && array[1] == array[4] && array[4] == array[7]) return [1,4,7];
    if (array[2] != '' && array[2] == array[5] && array[5] == array[8]) return [2,5,8];
    if (array[0] != '' && array[0] == array[4] && array[4] == array[8]) return [0,4,8];
    if (array[2] != '' && array[2] == array[4] && array[4] == array[6]) return [2,4,6];
    return null;
}

function highlightLine(line) {
    jQuery.each(line, function(i, item) {
        $( "#myTable td[index='" + item + "']").addClass(HIGHLIGHT);
    });
}

function getNext() {
    currentSymbol = (currentSymbol == CROSS) ? NOUGHT : CROSS;
    return currentSymbol;
}
