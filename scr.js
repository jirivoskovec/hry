var payoutMatrix = [];
var nes = [];

function createMatrix() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    document.getElementById("matrix").innerHTML = "";
    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        for (let colIndex = 0; colIndex < width; colIndex++) {
            if (document.getElementById("zerosum").checked) {
                document.getElementById("matrix").innerHTML += '<input type="text" value="0" id="mat_' + rowIndex + '_' + colIndex + '">';
            } else {
                document.getElementById("matrix").innerHTML += '<input type="text" value="0,0" id="mat_' + rowIndex + '_' + colIndex + '">';
            }
        }
        document.getElementById("matrix").innerHTML += "<br>\n";
    }
}

function loadMatrix() {
    payoutMatrix = [];
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        payoutMatrix.push([]);
        for (let colIndex = 0; colIndex < width; colIndex++) {
            const u = document.getElementById('mat_' + rowIndex + '_' + colIndex).value;
            var u1;
            var u2;
            if (document.getElementById("zerosum").checked) {
                u1 = parseFloat(u);
                u2 = -u1;
            } else {
                u1 = parseFloat(u.split(',')[0]);
                u2 = parseFloat(u.split(',')[1]);
            }
            payoutMatrix[rowIndex].push([u1, u2]);
        }
    }
}

function isNE(rowIndex, colIndex, width, height) {
    var isAlright = true;
    for (let i = 0; i < width; i++) {
        if (payoutMatrix[rowIndex][colIndex][0] < payoutMatrix[i][colIndex][0]) {
            isAlright = false;
        }
    }
    for (let i = 0; i < height; i++) {
        if (payoutMatrix[rowIndex][colIndex][1] < payoutMatrix[rowIndex][i][1]) {
            isAlright = false;
        }
    }
    return isAlright;
}

function bool_to_idattr(b) {
    if (b) {
        return "spanbold";
    } else {
        return "spannotbold";
    }
}

function displayNES(width, height) {
    document.getElementById("results").innerHTML = "";
    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        for (let colIndex = 0; colIndex < width; colIndex++) {
            if (document.getElementById("zerosum").checked) {
                document.getElementById("results").innerHTML += '<span id="' + bool_to_idattr(nes[rowIndex][colIndex]) + '">' + payoutMatrix[rowIndex][colIndex][0] + ')</span>' + (colIndex < width - 1 ? ", " : "");
            } else {
                document.getElementById("results").innerHTML += '<span id="' + bool_to_idattr(nes[rowIndex][colIndex]) + '">(' + payoutMatrix[rowIndex][colIndex][0] + ', ' + payoutMatrix[rowIndex][colIndex][1] + ')</span>' + (colIndex < width - 1 ? ", " : "");
            }
        }
        document.getElementById("results").innerHTML += "<br>\n";
    }
}

function findNES() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    loadMatrix();
    nes = [];
    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        nes.push([]);
        for (let colIndex = 0; colIndex < width; colIndex++) {
            nes[rowIndex].push(isNE(rowIndex, colIndex, width, height));
        }
    }
    displayNES(width, height);
}
