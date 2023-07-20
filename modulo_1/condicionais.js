var pessoa = {
    name: 'Acme',
    age: 17
}

function chackAge(person) {
    console.log(`A idade da pessoa é ${person.age}`)
    if (person.age > 17) {
         console.log('Esta pessoa é maior de idade');
    } else {
        console.log("Esta pessoa é menor de idade");
    }
}

chackAge(pessoa)