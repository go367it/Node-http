module.exports = (x, y, callback) => {
    if(x <= 0 || y <= 0){
        setTimeout(()=>{
            callback(new Error('something went wrong'),null)
        }, 3000)
    }
    else{
        setTimeout(()=>{
            callback(null,
                {
                    perimeter : (x,y) => (2*(x+y)),
                    area : (x,y) => (x*y)
                }
                )
        }, 3000)
    }
}

