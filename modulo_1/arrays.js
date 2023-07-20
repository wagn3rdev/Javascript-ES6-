var list = ['Din', 'Dan', 'Go', 'Sara', 'Lu']
var pessoas = [{name: 'Din', age: 23}, {name: 'Dan', age: 24}, {name: 'Go', age: 20}, {name: 'Sara', age: 22}, {name: 'Lu', age: 21}]

// console.log(list)
// console.log(pessoas)

for (const p of pessoas) {
    console.log(`Nome: ${p.name} - Idade: ${p.age}`)
    
}