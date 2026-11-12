let student = {
  name: "Harshit",
  age: 20,
  course: "BTech",
  "last name": "Raj",
  "": "Epty string",
  skills: ["C++", "Javascript", "React"],

  greet: function () {
    console.log("Hello from" + this.name);
  },
};

console.log(student);
console.log(student.name);
console.log(student.course);
student.address = "Pune";
student.age = 21;
console.log(student);
delete student.address;
console.log(student);

// console.log(student.last name)

console.log(student["name"]);
console.log(student["last name"]);
console.log(student[""]);

student.greet();

// let samriddhi = {

// }

console.log(Object.keys(student));
console.log(Object.values(student));

let arr = [
  { name: "Samriddhi", age: 20 },
  { name: "Harshita", age: 20 },
];

console.log(arr[0].name);
console.log(arr[1].age);