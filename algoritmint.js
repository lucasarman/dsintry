const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularX(A, B, C) {
  // Verifica se A e B são zero e C é diferente de 1
  if (A === 0 && B === 0 && C !== 1) {
    console.log("Solução impossível");
  } else {
    if (A + B !== 0) {
      // Verifica se A + B não é zero
      let X = (1 - C) / (A + B);
      console.log("O valor de X é:", X);
    } else {
      console.log("Solução impossível");
    }
  }
}

rl.question("Digite o valor de A: ", (A) => {
  rl.question("Digite o valor de B: ", (B) => {
    rl.question("Digite o valor de C: ", (C) => {
      A = parseInt(A);
      B = parseInt(B);
      C = parseInt(C);

      calcularX(A, B, C);

      rl.close();
    });
  });
});
