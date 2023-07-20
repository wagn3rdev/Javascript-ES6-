const students = [
  { name: "Lucas", grade: 8 },
  { name: "Mario", grade: 2 },
  { name: "Jean", grade: 10 },
  { name: "Rogerio", grade: 6 },
  { name: "Marcos", grade: 5 },
];

const flushed = students.filter((pupil) => {
  return pupil.grade >= 6;
});

console.log(flushed)