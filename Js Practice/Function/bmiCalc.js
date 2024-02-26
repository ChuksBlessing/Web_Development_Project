function bmiCalculator (weight, height) {
    let bmi = weight/Math.pow(height, 2);
    let roundedBmi = parseFloat(bmi.toFixed(1))
    if (roundedBmi < 18.5) {
        return("Your BMI is " + roundedBmi + ", so you are underweight.");
    } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
        return("Your BMI is " + roundedBmi + ", so you have a normal weight.");
    } else {
        return("Your BMI is " + roundedBmi + ", so you are overweight.");
    }
}