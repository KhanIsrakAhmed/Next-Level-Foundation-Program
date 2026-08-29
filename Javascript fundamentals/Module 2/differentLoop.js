// let techStack = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// for (const tech of techStack) {
//     console.log("learning ", tech);
// }

let obj = {
    name: "Israk",
    age: 22,
    email: "israk@example.com",
    addess: "Dhaka",
};

for (const key in obj) 
    {
        console.log(key,"->", obj[key]);
    }