const baseUrl = "https://jsonplaceholder.typicode.com";

async function getTodos() {
  const promises = Promise.all([
    fetch(`${baseUrl}/todos/1`).then((res) => res.json()),
    fetch(`${baseUrl}/todos/2`).then((res) => res.json()),
    fetch(`${baseUrl}/tdasdsadasdada`).then((res) => res.json()),
    fetch(`${baseUrl}/todos/4`).then((res) => res.json()),
    fetch(`${baseUrl}/todos/5`).then((res) => res.json()),
    fetch(`${baseUrl}/todos/6`).then((res) => res.json()),
    fetch(`${baseUrl}/todos/7`).then((res) => res.json()),
    fetch(`${baseUrl}/todos/8`).then((res) => res.json()),
    fetch(`${baseUrl}/todos/9`).then((res) => res.json()),
  ]);

  return promises;
}

const todos = getTodos().then(console.log);

// console.log(todos)

// setTimeout(() => {
//   console.log(todos);
// }, 3000)

