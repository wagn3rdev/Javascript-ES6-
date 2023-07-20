function createUser({name, age, email}) {
    return {name, age, contract: {email}}
}

const user = createUser({name:'Acme', age: 33, email: 'acme@mail.com'})
console.log(user)