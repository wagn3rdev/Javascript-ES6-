var person = {
    name: 'Acme',
    age: 33
}

function yearsToMajority(person) {
    if (person.age > 17) {
        return 0
    }
    return 18 - person.age
}

var age = yearsToMajority(person)
console.log(age)