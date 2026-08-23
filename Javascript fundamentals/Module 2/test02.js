// task: koto gulo item kinechen and koto tk bill hoyeche shese BDT te dekhate hobe print kore

let cart = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Pants", price: 1800, quantity: 1 },
  { name: "Socks", price: 150, quantity: 3 },
];  

let totalBill = 0;
let totalItem = 0;

for(let item of cart)
{
    totalBill += item.price*item.quantity;
    totalItem += item.quantity;
}
console.log("Total Item brought ", totalItem);
console.log("Total spends ", totalBill,"BDT")  