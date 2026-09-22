let fruits = ["Apple", "Banana", "Mango", "jackfruit"];

let newFruits = fruits.forEach((f, idx) => {
  console.log(`${idx + 1} -> ${f}`);
  //   return `${idx + 1} -> ${f}`; foreach can't return
});
console.log(newFruits);
