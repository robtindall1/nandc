var game = new Game();

$(function() {
    $( "#myTable td" ).click(function(event) {
            var td = event.target;
            var result = game.handleClick(td.getAttribute("index"));
            td.className = result.symbol;
            highlightLine(result.line);
        }
    );
});

function highlightLine(line) {
    jQuery.each(line, function(i, item) {
        $( "#myTable td[index='" + item + "']").addClass("highlight");
    });
}