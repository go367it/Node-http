let rect = require('./Rectangle');

function solveRect(l,b) {
    console.log("solving for rectangle width and length")

    if(l <= 0 || b <= 0 ){
        console.log("length and breadth must be greater than 0")
    }
    else {
        console.log("perimeter" + rect.perimeter(l,b));
        console.log("area:" + rect.area(l,b));
    }
}

solveRect(4,2);
solveRect(0,1);
solveRect(2,2);
solveRect(5,-3);