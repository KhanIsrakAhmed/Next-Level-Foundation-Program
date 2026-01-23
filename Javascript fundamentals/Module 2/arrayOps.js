let students ={
    name : "Israk",
    id : 101,
    marks: {
        bangla: 80,
        english: 90,
        math: 95,
    }
};
let totalMarks = 0;
let totalSubjects = 0;

for (const key in students.marks) {
    totalMarks += students.marks[key];
    totalSubjects++;
}

console.log("Total marks:", totalMarks);
console.log("Total subjects:", totalSubjects);
console.log("Average marks:", totalMarks / totalSubjects);