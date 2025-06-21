function bmiCalculator(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "Your BMI is " + bmi.toFixed(1) + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + bmi.toFixed(1) + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + bmi.toFixed(1) + ", so you are overweight.";
  }
}

let message = bmiCalculator(60, 1.7);  // weight in kg, height in meters
console.log(message);
// Output: "Your BMI is 20.8, so you have a normal weight."
