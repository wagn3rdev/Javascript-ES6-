const parts = ["ombro", "joelho"];
const sentence = ["cabeça", ...parts, "pe"];

const immutableArray = ["select", "*", "from"];

const mutableArray = [...immutableArray];
mutableArray.push("batata");
