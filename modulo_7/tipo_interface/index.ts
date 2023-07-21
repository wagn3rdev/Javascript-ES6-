// interface Person {
//     name: string
//     age: number
// }

// interface Person {
//     sex: 'male' | 'female'
// }

// const person: Person = {
//     age: 33,
//     name: 'Acme',
//     sex: 'male'
// }

// console.log(person)

// ========================================
interface Animal {
    sex: 'male' | 'female'
}

interface Human extends Animal {
    name: string
    age: number
}

const person: Human = {
    age: 33,
    name: 'Acme',
    sex: "female"
}

console.log(person)