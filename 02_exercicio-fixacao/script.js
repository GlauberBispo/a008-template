// EXERCICIO 01

console.log('Exercício de fixação 1');
const minhaIdade = Number(prompt('Qual a minha Idade?'));
const IdadeAmigo = Number(prompt('Qual a idade do seu/sua melhor amigo/amiga?'));
console.log("Sua idade é maior que a do seu/sua melhor amigo/amiga?", minhaIdade > IdadeAmigo);
let diferencaIdade = minhaIdade - IdadeAmigo
console.log('A diferença de idade é de', diferencaIdade, 'anos.');

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

// Não sou maior de idade e quero passear de carro;
// Sou maior de idade e vou para a praia, e não quero passear de carro;
// Vou para a praia ou quero passear de carro;
// Posso tomar uma cervejinha e não vou passear de carro;

!b && d;
b && a && !d;
a || d;
c && !d