const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numerosArrayDeArray = [numerosPares, numerosImpares];
console.log(numerosArrayDeArray); // [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]

const numerosArray = [...numerosPares, ...numerosImpares];
console.log(numerosArray); // [ 2, 4, 6, 1, 3, 5 ]

const num1 = 1;
const num2 = 2;

console.log(num1, num2); // 1, 2

const [num3, num4, ...outrosNumeros] = [3, 4, 5, 6, 7, 8, 9];

console.log(num3, num4, outrosNumeros); // 3 4 [ 5, 6, 7, 8, 9 ]

const [nome1 = 'Leandro'] = []; // Leandro
console.log(nome1);

const pessoa = {
  nome: 'Leandro',
  idade: 35
};

const pessoaComTelefone = { ...pessoa, telefone: 39722331 };
console.log(pessoaComTelefone);

const { nome } = pessoa;
const { idade } = pessoa;

console.log(idade);
console.log(nome);

function imprimeDados({ nome, idade }) {
  console.log(nome, idade);
}

imprimeDados(pessoa);
