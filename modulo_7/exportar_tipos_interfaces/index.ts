// import { Email, Person } from "./interfaces";

// const person: Person = {
//     age: 33,
//     name: 'Acme'
// }

// const email: Email = 'acme@mail.com'

// ====================

const person: Person.WithContacts = {
    age: 33,
    name: 'Acme',
    contacts: ['acme@mail.com']
}

console.log(person)