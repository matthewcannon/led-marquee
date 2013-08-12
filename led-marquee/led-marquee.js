var render = function(blockElement, numberOfRows, numberOfColumns) {
    var getCellClass = function(columnNumber) {
        return columnNumber % 3 === 0 ? "cell" : "cell on";
    }
    
    for(var rowNumber = 0; rowNumber < numberOfRows; ++rowNumber) {
    	var rowElement = $("<tr>");
    	blockElement.append(rowElement);
    	for (var columnNumber = 0; columnNumber < numberOfColumns; ++columnNumber) {
    		rowElement.append("<td id='cell-" + rowNumber + "-" + columnNumber + "' class='" + getCellClass(columnNumber) + "'>");
    		rowElement.append("</td>");
        }
    }
};

$(document).ready(function() {
    render($("#block"), 16, 16);
});