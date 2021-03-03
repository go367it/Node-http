let rect = require('./Rectangle');

function solveRect(l,b) {
    console.log("solving for rectangle width and length")

    rect(l, b, (err, rectangle) => {

        if(err){
            console.log("Error:",err.message)
        }
        else{

            console.log(`area of the rectangle ${rectangle.area()}`)

        }

    })

}

solveRect(4,2);
solveRect(0,1);
solveRect(2,2);
solveRect(5,-3);