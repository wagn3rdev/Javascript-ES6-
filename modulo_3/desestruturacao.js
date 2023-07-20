const person = {
  name: "Acme",
  age: 33,
  contact: {
    foo: {
      bar: {
        email: "acme@mail.com",
      },
    },
  },
};

function introduce({name, age}) {
    console.log(`Meu nome é ${name}, tenho ${age} anos`)
}

// Desestruturar lista
const fruits = ['Abacate', 'Manga', 'Morango', 'Uva']

const [firstFruit, secondFruit] = fruits
// console.log(firstFruit)
// console.log(secondFruit)

// DESESTRUTURAR OBJETOS
const { name, contact: { foo: { bar: { email } } } } = person
const { name: nomeDaPessoa } = person
console.log(nomeDaPessoa);
console.log(name)
console.log(email);