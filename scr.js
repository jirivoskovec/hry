function createMatrix() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    document.getElementById("matrix").innerHTML = "";
    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        for (let colIndex = 0; colIndex < width; colIndex++) {
            if (document.getElementById("zerosum").checked) {
                document.getElementById("matrix").innerHTML += '<input type="number" value="0" id="mat_' + rowIndex + '_' + colIndex + '">';
            } else {
                document.getElementById("matrix").innerHTML += '<input type="number" value="0,0" id="mat_' + rowIndex + '_' + colIndex + '">';
            }
        }
        document.getElementById("matrix").innerHTML += "<br>\n";
    }
}
