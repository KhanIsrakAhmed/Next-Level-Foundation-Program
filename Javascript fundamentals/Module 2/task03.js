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

function getAll() {
  for (const student of students) {
    console.log(student);
  }
}

function findStudents(id) {
  let found = null;

  for (let student of students) {
    if (student.id == id) {
      found = student.name;
      break;
    }
  }

  if (found) {
    console.log("Found Student:", found);
  } else {
    console.log("404 student not found");
  }
}

function deleteStudent(id) {
  let targetStd = null;

  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      targetStd = i;
      break;
    }
  }

  if (targetStd !== null) {
    let deleteStd = students.splice(targetStd, 1);

    console.log(`Deleted Student: ${deleteStd[0].name} id: ${deleteStd[0].id}`);
  } else {
    console.log("404 student not found");
  }
}

deleteStudent(276);
getAll();

findStudents(276);
