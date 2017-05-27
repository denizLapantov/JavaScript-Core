function tripLength(input) {
    let [x1, y1, x2, y2, x3, y3] = input.map(Number);

    let distanceBetweenTwoPoints = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    let distance123 = distanceBetweenTwoPoints(x1, y1, x2, y2) + distanceBetweenTwoPoints(x2, y2, x3, y3);
    let distance132 = distanceBetweenTwoPoints(x1, y1, x3, y3) + distanceBetweenTwoPoints(x3, y3, x2, y2);
    let distance213 = distanceBetweenTwoPoints(x2, y2, x1, y1) + distanceBetweenTwoPoints(x1, y1, x3, y3);

    let shortDistance = Math.min(distance123, distance132, distance213);

    if(shortDistance == distance123){
        console.log(`1->2->3: ${shortDistance}`);
        return;
    } else if (shortDistance == distance132){
        console.log(`1->3->2: ${shortDistance}`);
        return;
    }else if(shortDistance == distance213){
        console.log(`2->1->3: ${shortDistance}`);
        return;
    }
}

tripLength([-1, -2, 3.5, 0, 0, 2]);