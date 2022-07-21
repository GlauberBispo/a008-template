//CODIGO AQUI

// Operadores
let saldo = 15;
console.log ("Meu saldo inicial é de", saldo, ".")
saldo += 22.40;
console.log ("Fiquei com", saldo, "após receber a quantia.")
saldo -= 12.34;
console.log ("Após gastar tenho", saldo, ".")
saldo /= 3;
console.log ("Após dividir o dinheiro tenho", saldo, ".")
saldo *= 3.42;
console.log ("Após aplicação tenho", saldo, ".")
saldo %= 3;
console.log ("sobrou para o chiclete", saldo,".");

// Precedência matemática

let somaEMult1 = 2*2+2;
console.log("SM1", somaEMult1);

let somaEMult2 = 2*(2+2);
console.log("SM1", somaEMult2);


// Operadores Relacionais

const resultado1 = 5===5;
console.log("R1", resultado1);
const resultado2 = 5!==5;
console.log("R2", resultado2);
const resultado3 = 5!=="5";
console.log('R3', resultado3);
const resultado4 = '5'==='cinco';
console.log('R4', resultado4);
const resultado5 = typeof   5 === typeof 20;
console.log('R5',resultado5);
const resultado6 = typeof '5' === typeof 'cinco';
console.log('R6', resultado6);

// Menor ou Maior ou ígual

const primeiroNun = 5;
const segundoNun = "5";

console.log ('O primeiro número  é ígual ao segundo?', primeiroNun === segundoNun );
console.log ('O primeiro número  é menor ou ígual ao segundo?', primeiroNun <= segundoNun );
console.log ('O primeiro número  é maior ao segundo?', primeiroNun > segundoNun );
console.log ('O primeiro número  é menor ao segundo?', primeiroNun < segundoNun );

// Condicionais junto com relacionais

const a = 'Quero dirigir um celta 2012';
const b = 'Sou maioor de idade';
const c = 'Consigo comprar o celta por R$ 22000';
const d = 'Consigo alugar o celtaa';
const e = 'Tenho carteira de motorista';

// Quero dirigir o Celta 2012
// Não sou maior de idade;
// Sou maior de idade e não tenho carteira de motoristaa
// Sou maior de idade e consigo comprar oou alugar  um celta 2012


//Exercício de fixação 1

console.log('Exercício de fixação 1');
const minhaIdade = Number(prompt('Qual a minha Idade?'));
const IdadeAmigo = Number(prompt('Qual a idade do seu/sua melhor amigo/amiga?'));
console.log("Sua idade é maior que a do seu/sua melhor amigo/amiga?", minhaIdade > IdadeAmigo);
let diferencaIdade = minhaIdade - IdadeAmigo
console.log('A diferença de idade é de', diferencaIdade, 'anos.');

//Exercício de fixação 2
