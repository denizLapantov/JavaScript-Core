function Distance3d([x1,y1,z1,x2,y2,z2]){
    let deltaX = x1 -x2;
    let deltaY = y1-y2;
    let deltaZ = z1-z2;
    let FullDistance =Math.sqrt((deltaX*deltaX) + (deltaY*deltaY) + (deltaZ* deltaZ));
    console.log(FullDistance);
}

Distance3d([1, 1, 0, 5, 4, 0]);