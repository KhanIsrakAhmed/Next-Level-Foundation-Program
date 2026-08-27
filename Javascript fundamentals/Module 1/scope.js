
if (true) {
    let age;
}

function sayAge() {
    age = 23;
    console.log(age);
}

console.log(age); // undefined
sayAge(); // 23
console.log(age); // 23