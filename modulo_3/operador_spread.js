const parts = ["ombro", "joelho"];
const sentence = ["cabeça", ...parts, "pés"];

function createUser(name, age, ...contacts) {
  return {
    name,
    age,
    contacts,
  };
}

const immutableArray = ["select", "*", "from", "posts"];

const mutableArray = [...immutableArray];
mutableArray.push("where id = 1");
