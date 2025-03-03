
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 40 },
    { name: "Charlie", score: 60 },
    { name: "David", score: 30 }
  ];

let studentsAbove50 = students.filter(student=>student.score> 50);
console.log(studentsAbove50);

let score = [10,20,30]

if (score>20){
    console.log(score);
}