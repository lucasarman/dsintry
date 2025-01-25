function verificarValores(A, B, C, D) {
  if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {
    return "Valores aceitos";
  } else {
    return "Valores não aceitos";
  }
}

const A = 2;
const B = 6;
const C = 4;
const D = 8;

const valores = verificarValores(A, B, C, D);

console.log(valores);
