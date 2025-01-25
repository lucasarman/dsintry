function verificarPlaca(placa) {
  const brasilRegex = /^[A-Z]{3}[0-9]{4}$/;
  const mercosulRegex = /^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/;

  if (brasilRegex.test(placa)) {
    console.log("Padrão: Brasil");

    const correspondente =
      placa.substring(0, 3) + placa[3] + placa[4] + placa[5] + placa[6];
    console.log(
      "Correspondente: " +
        correspondente.substring(0, 3) +
        correspondente[3] +
        correspondente[4] +
        correspondente[5]
    );
  } else if (mercosulRegex.test(placa)) {
    console.log("Padrão: Mercosul");

    const correspondente =
      placa.substring(0, 3) + placa[3] + placa[4] + placa[5] + placa[6];
    console.log(
      "Correspondente: " +
        correspondente.substring(0, 3) +
        correspondente[3] +
        correspondente[4] +
        correspondente[5] +
        correspondente[6]
    );
  } else {
    console.log("Formato inválido");
  }
}

verificarPlaca("ABC1234");
verificarPlaca("ABC1C34");
verificarPlaca("AB12345");
