let user= {
    name: "Israk",
    age: 22,
    email: "israk@example.com",
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        zipcode: 1206,
    }
};
console.log(user["address"]["zipcode"]);
console.log(user.address.city);

let entry = Object.entries(user);
console.log(entry[0][1]);

let students = [
    {
    name: "Israk",
    id: 101,
    },
    {
    name: "Muntasir",
    id: 102,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        zipcode: 1206,
    },
    bus: ["trust","No.4"],
    },
    {
    name: "Najifa",
    id: 103,
    },
];


console.log(students[1].address.city);

students[1].bus.push("BRTC");
students[1].bus[1]= "Alaik";
console.log(students[1]);