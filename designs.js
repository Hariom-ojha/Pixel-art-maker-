// Select size input
const size = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
// creating design canvas using makeGrid function
function makeGrid() {
	var height = document.getElementById('inputHeight').value;
	var width = document.getElementById('inputWidth').value;
	while(table.firstChild) {
		table.removeChild(table.firstChild);
	}
	// creates rows and columns
	for(var i = 1; i <= height; i++) {
		var row = document.createElement('tr');
		table.appendChild(row);
		for(var j = 1; j <= width; j++) {
			var cell = document.createElement('td');
			row.appendChild(cell);
			// Fills in cell with selected color upon mouse click
			cell.addEventListener('click', function() {
				const color = document.getElementById('colorPicker').value;
				this.style.backgroundColor = color;
			});
		}
	}
}
makeGrid();
size.addEventListener('submit', function(event) {
	event.preventDefault();
	makeGrid();
});