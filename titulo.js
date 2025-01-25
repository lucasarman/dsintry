function criarTitulo(parteSuperior, parteInferior) {
  function criarLinha() {
    return "-----------------------------";
  }

  function centralizarTexto(texto) {
    const larguraConsole = 80;
    const espacos = Math.max(
      0,
      Math.floor((larguraConsole - texto.length) / 2)
    );
    return " ".repeat(espacos) + texto;
  }

  // Criar o título formatado
  const linhaSuperior = centralizarTexto(criarLinha());
  const linhaInferior = centralizarTexto(criarLinha());
  const tituloSuperior = centralizarTexto(parteSuperior);
  const tituloInferior = centralizarTexto(parteInferior);

  console.log(linhaSuperior);
  console.log(tituloSuperior);
  console.log(linhaInferior);
  console.log(tituloInferior);
}

criarTitulo("Título Superior", "Título Inferior");
