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
const student2 = {
  name: "Mowdud",
  age: 24,
  address: {
    city: "Dhaka",
    zip: 1206,
  },
  hobby: ["gurdening", "Gaming"],
};

const {
  name: studentName,
  address: { city, zip },
} = student1;

console.log(name, studentName, city, zip);
const {
  name: stdName,
  address: { city: stdCity },
  hobby: [firstHobby],
} = student2;

console.log(stdName, stdCity, zip, firstHobby);

const arr = ["first", "second", "third"];
// const [first, second, third] = arr;
const [, , third] = arr;

console.log(third);
