let user = {
    name: "Israk",
    age: 22,
    email: "israk@example.com"
};
console.log(user.name);
console.log(user["email"]);

delete user.email;
console.log(user);

user.address={
    city: "Dhaka",
    country: "Bangladesh"
};
console.log(user);


console.log(Object.entries(user));
console.log(Object.keys(user));