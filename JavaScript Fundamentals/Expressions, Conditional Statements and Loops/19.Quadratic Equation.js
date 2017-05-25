function QuadraticEquation(a,b,c) {
    var root_part = 0;
    root_part =((b * b) - (4 * a * c));
    if(root_part < 0){
        console.log('no')
    }
    else {
        root_part = Math.sqrt(root_part);
        var denom = 2 * a;

        var root1 = ( -b + root_part ) / denom;
        var root2 = ( -b - root_part ) / denom;


     if (root_part ==0){
            console.log(root1)
        }
        else {
            console.log(root2);
            console.log(root1);
        }
    }

}

QuadraticEquation(5,2,1);