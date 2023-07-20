const fruits = ['banana', 'laranja', 'manga', 'morango', 'uva']

const [firstItem, secondItem] = fruits
const [, , thirdItem] = fruits;
// console.log(firstItem)
// console.log(secondItem)
// console.log(thirdItem);

const friends = [{name: 'Acme', age: 33}, {name: 'João', age: 22}, {name: 'Pedro', age: 50}]
const chart = [[1, 2], [3, 5], [7, 11]]
const [, { name }] = friends
const [, , [left, ]] = chart
console.log(name)
console.log(left);
// console.log(friends)