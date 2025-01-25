function ehNumeroPerfeito(num) {
  let somaDivisores = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      somaDivisores += i;
    }
  }
  return somaDivisores === num;
}

function ehRaizInteira(num) {
  let raiz = Math.sqrt(num);
  return raiz === Math.floor(raiz);
}

function gerarSequencia(N) {
  for (let i = 1; i <= N; i++) {
    if (ehNumeroPerfeito(i)) {
      console.log(i + " numero perfeito");
    } else if (i % 3 === 0) {
      console.log(i + " multiplo de 3");
    } else if (i % 5 === 0) {
      console.log(i + " multiplo de 5");
    } else if (ehRaizInteira(i)) {
      console.log(i + " raiz inteira");
    } else {
      console.log(i);
    }
  }
}

let N = 20;
gerarSequencia(N);
