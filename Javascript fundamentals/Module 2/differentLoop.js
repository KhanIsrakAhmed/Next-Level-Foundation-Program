// let techStack = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

// for (const tech of techStack) {
//     console.log("learning ", tech);
// }

// let obj = {
//     name: "Israk",
//     age: 22,
//     email: "israk@example.com",
//     addess: "Dhaka",
// };

// for (const key in obj) 
//     {
//         console.log(key,"->", obj[key]);
//     }

let marks = 50;

for (let i = marks; i <= 100 ; i++)
{
    if (i > 80)
    {
        break;
    }
    console.log("marks: ", i);
    i += 5;
}

for (let i = 0; i <= 10; i++)
{
    if (i % 2 != 0)
    {
        continue;
    }
    console.log("Even number: ", i);
}