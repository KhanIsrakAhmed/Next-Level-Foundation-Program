let products = [
  { id: 1, title: "Mouse", price: 500, category: "Accessories", inStock: true },
  {
    id: 2,
    title: "Keyboard",
    price: 1200,
    category: "Accessories",
    inStock: false,
  },
  { id: 3, title: "Monitor", price: 8000, category: "Display", inStock: true },
  { id: 4, title: "Laptop", price: 55000, category: "Computer", inStock: true },
  {
    id: 5,
    title: "Headphone",
    price: 1500,
    category: "Accessories",
    inStock: true,
  },
];
// শুধু In-Stock Product, Price অনুযায়ী কম থেকে বেশি সাজানো, শুধু Title+Price বের করা, টোটাল কত টাকা লাগবে স্টক আউট করতে চাইলে সেটা ক্যালকুলেট করুন।
let inStockProducts = products
  ?.filter((p) => p.inStock)
  ?.sort((a, b) => a.price - b.price)
  ?.map((p) => `${p.title}: ${p.price}`)
  ?.forEach((p) => console.log(p));

let totalCost = products
  ?.filter((p) => !p.inStock)
  ?.reduce((sum, p) => sum + p.price, 0);

console.log(`Total cost to restock out-of-stock products: ${totalCost}`);
