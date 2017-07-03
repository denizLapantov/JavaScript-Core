function solve(name, age, weight, height) {

    let status;
    let bmi =  Math.round(weight / Math.pow(height / 100 ,2));
    if(bmi < 18.5) status = "underweight";

    else if (bmi < 25)  status = "normal";
    else if (bmi < 30)   status = "overweight";
    else if (bmi >= 30) status = "obese";

    let result = {
        name : name,
        personalInfo: {
            age: age,
            weight : weight,
            height: height
        },
        BMI: bmi,
        status: status

    };

    if(status === "obese"){
        result['recommendation']  = 'admission required';
    }

    return result;
}

console.log(solve('Honey Boo Boo', 9, 57, 137));