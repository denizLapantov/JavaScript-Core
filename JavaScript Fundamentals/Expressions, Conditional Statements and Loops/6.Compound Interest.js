function CompoundInterest([p,i,n,t]) {

    let compoundInterest = p * Math.pow(1 + i/(100*( 12/n)), 12/n * t);
    console.log(compoundInterest.toFixed(2));

}

CompoundInterest([1500, 4.3, 3, 6])