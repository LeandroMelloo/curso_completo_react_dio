import { Cliente } from "./Cliente.js";

// classe
export class ContaCorrente {
  // atributo estatico
  static numeroContaCorrentes = 0; // numero de contas inicializa em 0

  // atributo
  agencia;
  _cliente; // atributo privado
  _saldo = 0; // atributo privado

  // atribuir valor => definido para atribuição
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  // acessor => definido para leitura
  get cliente() {
    return this._cliente;
  }

  // acessor => definido para leitura
  get saldo() {
    return this._saldo;
  }
 
  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroContaCorrentes += 1; // cada conta criada é somado 1
  }

  // método
  sacar(valor) {
    if (this._saldo < valor) {
      return `Saldo indisponível para saque, valor na conta R$ ${this._saldo}.`;
    };
    this._saldo -= valor;
    return valor; // return para execução deste método depois de executado.
  };

  // metodo
  depositar(valor) {
    if (valor <= 0) {
      return;
    };
    this._saldo += valor;
  };

  // metodo
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
    conta.cidade = "São Paulo"; // Tipo de Referência - irá incluir o valor, pois está retornando o objeto original e não uma cópia.
    valor = 20; // Tipo de Valor - não irá alterar o valor, pois está retornando uma copia do valor e não a variavel original.
  };
};