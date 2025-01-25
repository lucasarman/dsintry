function criarMatrizCaracol(N) {
  let matriz = Array.from({ length: N }, () => Array(N).fill(0));

  let valor = 1;
  let cima = 0,
    baixo = N - 1,
    esquerda = 0,
    direita = N - 1;

  while (valor <= N * N) {
    for (let i = esquerda; i <= direita; i++) {
      matriz[cima][i] = valor++;
    }
    cima++;

    for (let i = cima; i <= baixo; i++) {
      matriz[i][direita] = valor++;
    }
    direita--;

    if (cima <= baixo) {
      for (let i = direita; i >= esquerda; i--) {
        matriz[baixo][i] = valor++;
      }
      baixo--;
    }

    if (esquerda <= direita) {
      for (let i = baixo; i >= cima; i--) {
        matriz[i][esquerda] = valor++;
      }
      esquerda++;
    }
  }

  for (let i = 0; i < N; i++) {
    console.log(matriz[i].join(" "));
  }
}

criarMatrizCaracol(5);
