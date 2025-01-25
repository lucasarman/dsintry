function calcularSalarioLiquido(horasPorDia, precoHora, diasTrabalhados) {
  const salarioBruto = horasPorDia * precoHora * diasTrabalhados;
  const desconto = salarioBruto * 0.03;
  const salarioLiquido = salarioBruto - desconto;

  return salarioLiquido;
}

const horasPorDia = 8;
const precoHora = 20;
const diasTrabalhados = 22;
const salarioLiquido = calcularSalarioLiquido(
  horasPorDia,
  precoHora,
  diasTrabalhados
);

console.log(`O salário líquido é R$ ${salarioLiquido.toFixed(2)}`);
