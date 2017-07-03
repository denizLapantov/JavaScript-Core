let add = (function(){
    let sum = 0;
    return function sumNum(num) {
        sum += num;
        sumNum.toString = () => sum;
        return sumNum();
    }
})();

console.log(add(1)(6)(-3).toString());
