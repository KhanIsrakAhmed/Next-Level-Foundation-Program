const a = 20;
const b = 6;



const c = !(a<b) && 275;
console.log(c);

const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;


console.log("Sum:", sum);

console.log("Difference:", difference);

console.log("Product:", product);

console.log("Quotient:", quotient);

console.log("Remainder:", a % b);
//  a + b - (c+f) * d / e


let age = 25;

if (age >= 20) {
    age ++;
    console.log("Age", age);
}
else if (age >= 18) {
    console.log("You are an adult.");
}
console.log("New Age:", age );
