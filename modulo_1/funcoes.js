// function greet() {
//     console.log('Boa noite')
// }

// function greet(name = 'Dev') {
//   console.log("Boa noite " + name);
// }

function greet(name = 'DEv') {
    return "Boa noite " + name;
}
var greeting = greet("Acme")
console.log(greeting)