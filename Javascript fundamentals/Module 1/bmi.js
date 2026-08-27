const weight = process.argv[2];

const height = process.argv[3];  
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

const myBMI = calculateBMI(weight, height);


function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }   
}

const bmiCategory = getBMICategory(myBMI);
console.log(`Your BMI is ${myBMI.toFixed(2)} which is classified as: ${bmiCategory}`);