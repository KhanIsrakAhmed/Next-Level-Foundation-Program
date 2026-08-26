let students = [
  { id: 275, name: "Israk", age: 24, dept: "BsCSE" },
  { id: 276, name: "Sufia", age: 22, dept: "BsCSE" },
  { id: 277, name: "Muntsasir", age: 4, dept: "Pre School" },
];

function addStudent(name, age, dept) {
  let newID = students.length > 0 ? students[students.length - 1].id + 1 : 275;

  let newStudent = {
    id: newID,
    name: name,
    age: age,
    dept: dept,
  };

  students.push(newStudent);
  console.log("Student added Successfully");
}

addStudent("Moudud", 31, "BsCivil");
console.log(students);
