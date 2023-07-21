function handleClick() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   reject("Erro inesperado");
      resolve(123);
    }, 2000);
  });
}

const result = handleClick()
  .then((res) => {
    console.log(123 === res);
    console.log("finalizou");
    // return "batata";
    return res;
  })
  .catch((err) => {
    console.log("houve um erro");
    console.log(err);
  });

console.log(result)
  
