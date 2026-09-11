let students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 45 },
  { name: "Fahim", marks: 70 },
];
let fruits = ["Apple", "Banana", "Mango", "jackfruit"];

//find
let customFruit = fruits.find((f) => f.length > 5);
console.log(customFruit);
