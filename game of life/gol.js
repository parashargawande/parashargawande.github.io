var rows, cols;
var grid;
let width = 600;
let height = 600;
let resolution = 10;
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "gray";

changeGrid = document.getElementById("changeGrid");
changeGrid.value = resolution;
changeGrid.addEventListener("change", (e) => {
    console.log(e.target.value);
    resolution = e.target.value;
    draw();
});

function copyArray(array) {
    let newArr = [];
    for (let i = 0; i < cols; i++) {
        var row = [];
        for (let j = 0; j < rows; j++) {
            row.push(array[i][j]);
        }
        newArr.push(row);
    }
    return newArr;
}
function array2d(cols, rows) {
    var array = new Array();
    for (let i = 0; i < cols; i++) {
        var row = new Array();
        for (let j = 0; j < rows; j++) {
            row.push(0);
            // row.push(Math.floor((Math.random() * 10) % 2));
        }
        array.push(row);
    }
    return array;
}

function neighbour(grid, i, j) {
    var sum = 0;
    sum += grid[(i - 1 + cols) % cols][j];
    sum += grid[(i + 1 + cols) % cols][j];
    sum += grid[i][(j - 1 + rows) % rows];
    sum += grid[i][(j + 1 + rows) % rows];
    sum += grid[(i - 1 + cols) % cols][(j - 1 + rows) % rows];
    sum += grid[(i + 1 + cols) % cols][(j + 1 + rows) % rows];
    sum += grid[(i - 1 + cols) % cols][(j + 1 + rows) % rows];
    sum += grid[(i + 1 + cols) % cols][(j - 1 + rows) % rows];
    return sum;
}

function drawgol(grid, newgrid) {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] == 0 && neighbour(grid, i, j) == 3) {
                newgrid[i][j] = 1;
            } else if (grid[i][j] == 1 && neighbour(grid, i, j) < 2) {
                newgrid[i][j] = 0;
            } else if (grid[i][j] == 1 && neighbour(grid, i, j) > 3) {
                newgrid[i][j] = 0;
            } else {
                newgrid[i][j] = grid[i][j];
            }
        }
    }
    drawMatrix(newgrid);
}

function drawMatrix(newgrid) {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (newgrid[i][j] == 1) {
                ctx.fillStyle = "white";
            } else {
                ctx.fillStyle = "black";
            }
            var x = i * resolution;
            var y = j * resolution;
            ctx.beginPath();
            ctx.rect(x + 1, y + 1, resolution - 2, resolution - 2);
            ctx.fill();
        }
    }
}
// (xord -1)/resolution  = i
c.addEventListener("click", (e) => {
    var clickX = e.pageX - c.offsetLeft;
    var clickY = e.pageY - c.offsetTop;
    if (grid[Math.floor((clickX - 1) / resolution)][Math.floor((clickY - 1) / resolution)] == 1) {
        grid[Math.floor((clickX - 1) / resolution)][Math.floor((clickY - 1) / resolution)] = 0;
    } else {
        grid[Math.floor((clickX - 1) / resolution)][Math.floor((clickY - 1) / resolution)] = 1;
    }
    drawMatrix(grid);
});

function intervalFun() {
    var temp;
    drawgol(grid, newGrid);
    temp = grid;
    grid = newGrid;
    newGrid = temp;
}

function draw() {
    rows = width / resolution;
    cols = height / resolution;
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = "gray";
    ctx.fill();

    grid = array2d(cols, rows);
    drawMatrix(grid);
    // var grid = array2d(cols, rows);
    newGrid = copyArray(grid);
    var temp;
    // setInterval(() => {
    //         drawgol(grid, newGrid);
    //         temp = grid;
    //         grid = newGrid;
    //         newGrid = temp;
    //         console.log('timeout');
    //     }, 500);
}

var intervalVar = null;
var newGrid;

function startInterval() {
    intervalVar = setInterval(intervalFun, 1000);
}
function clearIntervalFun() {
    clearInterval(intervalVar);
}

draw();