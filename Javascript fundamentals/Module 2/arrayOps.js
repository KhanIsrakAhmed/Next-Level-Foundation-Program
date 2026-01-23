let students = {
    name: "Israk",
    id: 101,

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

let avg = totalMarks / totalSubjects;

console.log("Total marks:", totalMarks);
console.log("Total subjects:", totalSubjects);
console.log("Average marks:", avg.toFixed(3));

if (avg >= 80) {
    console.log("Passed with distinction. Got", avg.toFixed(3), "%");
} else {
    console.log("Fail koreche, porashunai focus dite hobe");
}