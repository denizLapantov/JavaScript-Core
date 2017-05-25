
function Distance([speed1,speed2,time]) {
    let distance1 =(speed1 / 3.6) * time;
    let distance2 = (speed2 / 3.6) * time;

    let delta = Math.abs(distance1 - distance2);

    console.log(delta);
    
}

Distance([0,60,3600])