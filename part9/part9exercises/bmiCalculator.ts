const calculateBmi = (height: number, weight: number) => {
  let bmi = weight / ((height * 0.01) * (height * 0.01));
  if (bmi >= 20 && bmi < 25) {
    return 'Normal (healthy weight)';
  }
  else if (bmi < 20) {
    return 'Underweight';
  }
  else if (bmi >= 25) {
    return 'Overweight';
  }
}

console.log(calculateBmi(180, 74));