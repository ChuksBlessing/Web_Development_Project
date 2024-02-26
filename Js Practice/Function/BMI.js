function bmiCalculator(weight, height){
    let squareHeight = Math.pow(height,2);
    return("Your BMI is " + Math.round(weight/squareHeight));
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:*/

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi)

/* bmi should equal 20 when it's rounded to the nearest whole number.*/