const student = {
         name: "Rahul",
          age: 20,
         course: "Javascript",
};
student.age = 20;
student.city = "Hyderabad";
delete student.age;
console.log(student.city);
