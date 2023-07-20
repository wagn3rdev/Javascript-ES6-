const guests = [
  { name: "Marcos", age: 23 },
  { name: "Angelica", age: 27 },
  // { name: 'Luana',    age: 17 },
  { name: "Leticia", age: 45 },
  { name: "Raphael", age: 18 },
];

// existem maiores de idade na lista de convidados?
const hasAdults = guests.some((guest) => guest.age >= 18);
console.log(hasAdults)
// todos os convidados são maiores de idade?
const everyoneIsAnAdult = guests.every((guest) => guest.age >= 18);
console.log(everyoneIsAnAdult)