let products = [
  { title: "Mouse", price: 500, inStock: true },
  { title: "Keyboard", price: 1200, inStock: false },
  { title: "Monitor", price: 8000, inStock: true },
  { title: "Headphone", price: 1500, inStock: true },
];

let totalPrice = products.reduce((acc, current) => {
  return (acc += current.price);
}, 0);

console.log(totalPrice);
