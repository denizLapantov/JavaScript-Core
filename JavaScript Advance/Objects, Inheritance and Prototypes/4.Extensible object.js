function extensibleObject() {
    let obj = {
        extend: function (templete) {
            for (let key in templete) {
                if(templete.hasOwnProperty(key)){
                    let element = templete[key];
                    if(typeof element === 'function'){
                        obj.__proto__[key] = element;
                    }else {
                        obj[key] = element;
                    }
                }
            }
        }
    };

    return obj;
}