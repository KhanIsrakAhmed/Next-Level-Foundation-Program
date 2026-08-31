function add(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(add(1, 2, 3, 4, 5, 6, 100));

const obj = {
  name: "Israk",
  age: 27,
  address: "Dhaka",
  occupation: "Developer",
};

const { name, ...remaining } = obj;

console.log(remaining);

const arr = [1, 2, 3, 100, 200];

const [, , , ...rest] = arr;

console.log(rest);
