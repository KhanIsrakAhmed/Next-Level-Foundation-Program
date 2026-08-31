// // Math expression

let price = 500;
let qnantity = 4;

// console.log(`Total price ${price * qnantity} bdts`);

function getDiscount(price) {
  return price * 0.1;
}

console.log(
  `Total price ${price * qnantity - getDiscount(price)} bdt \nYou saved ${getDiscount(price)} bdt`,
);

let stock = 9;
console.log(
  `Status : ${stock > 0 ? "In stock" + " " + stock : "Out of stock"}`,
);
