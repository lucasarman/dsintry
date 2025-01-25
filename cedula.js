function calcularCedulas(valor) {
  const notas = [200, 100, 50, 20, 10, 5, 2, 1];
  const resultado = {};
  for (const nota of notas) {
    resultado[nota] = Math.floor(valor / nota);
    valor %= nota;
  }
  return resultado;
}

const valor = 1410;
const cedulas = calcularCedulas(valor);

console.log(`Valor lido: R$ ${valor},00`);
for (const [nota, quantidade] of Object.entries(cedulas)) {
  console.log(`${quantidade} nota(s) de R$ ${nota},00`);
}
