let fruits = ["Apple", "Banana", "Mango", "jackfruit"];

//find
let customFruit = fruits.find((f) => f.length > 5);
console.log(customFruit);

let findFr = fruits.includes("Mango"); // true false
console.log(findFr);

let students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 45 },
  { name: "Fahim", marks: 70 },
];

let studentCheck = students.some((s) => s.marks > 90);
console.log(studentCheck);

let studentCheck2 = students.every((s) => s.marks > 40);
console.log(studentCheck2);
