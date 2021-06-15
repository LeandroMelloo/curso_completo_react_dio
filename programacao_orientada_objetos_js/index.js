import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// instânciando a classe Cliente
const cliente1 = new Cliente('Leandro', 338887774, 33355588822); // passando os parametros para o construtor da classe Cliente
const cliente2 = new Cliente('Luciana', 339791044, 44411188822); // passando os parametros para o construtor da classe Cliente

const contaCorrente1 = new ContaCorrente(1001, cliente1); // passando os parametros para o construtor da classe ContaCorrente
contaCorrente1.depositar(200);
contaCorrente1.sacar(50);

const contaCorrente2 = new ContaCorrente(1002, cliente2); // passando os parametros para o construtor da classe ContaCorrente
contaCorrente2.depositar(100);
contaCorrente2.sacar(50);

let valor = 50;
contaCorrente1.transferir(valor, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(ContaCorrente.numeroContaCorrentes);
