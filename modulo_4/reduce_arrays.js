const students = [
  { name: "Lucas", grade: 8 },
  { name: "Mario", grade: 2 },
  { name: "Jean", grade: 10 },
  { name: "Rogerio", grade: 6 },
  { name: "Marcos", grade: 5 },
];

const classroomTotalPoints = students.reduce((prev, current) => {
  console.log(prev);
  console.log(current);
  return prev + current.grade;
}, 0);
