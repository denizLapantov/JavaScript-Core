function PointInRectangle([x,y,xMin,xMax,yMin,yMax]) {

    if(x >= xMin && x <=xMax && y >= yMin && y <=yMax){
        console.log("inside")
    }
        else
        console.log("outside")
}

PointInRectangle([8,-1,2,12,-3,3])