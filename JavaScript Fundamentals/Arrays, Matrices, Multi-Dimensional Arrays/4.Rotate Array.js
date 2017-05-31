 function rotateArray(input) {
     let rotations = Number(input.pop());
     rotations %= input.length;

     for(let i=0; i < rotations; i++) {
         input.unshift(input[input.length-1]);
         input.pop();
 }

     console.log(input.join(' '));
 }

 rotateArray(["Banana","Orange","Coconut","Apple",15]);