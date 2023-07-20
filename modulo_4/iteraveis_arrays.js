function greet() {
  const args = Array.from(arguments, function (name) {
    return "!" + name;
  });

  args.forEach((argument) => {
    console.log(`Hello, ${argument}`);
  });
}

greet('Acme', 'Din')
