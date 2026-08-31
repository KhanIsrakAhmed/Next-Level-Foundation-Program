const students = {
  name: "Israk",
  age: 24,
  address: "Dhaka",
};

//old
const oldNname = students.name;

//new
const { age, name, address } = students;
console.log(name);
console.log(age);

const student1 = {
  name: "Muntasir",
  age: 24,
  address: {
    city: "Dhaka",
    zip: 1206,
  },
};

const {
  name: studentName,
  address: { city, zip },
} = student1;

console.log(name, studentName, city, zip);

const arr = ["first", "second", "third"];
const [first, second, third] = arr;

console.log(third);
