/*
 * Declarando funções
 * Um triângulo é formado por três lados cada lado com uma medida.
 * Só irá existir um triângulo se, somente se, os seus lados obedeceram
 * à seguinte regra: um de seus lados deve ser maior que o valor absoluto (módulo)
 * da diferença dos outros dois lados e menor que a soma dos outros dois lados.
 *
 * Faça a declaração da função.
 * Troque "{}" pelo nome dado a função
 */

function Triangulo(a:number, b:number, c:number): boolean {
  const TrianguloA = Math.abs(b - c) < a && a < b + c;
  const TrianguloB = Math.abs(a - c) < b && b < a + c;
  const TrianguloC = Math.abs(a - b) < c && c < a + b;

  return (TrianguloA && TrianguloB && TrianguloC);
}

export default Triangulo;
