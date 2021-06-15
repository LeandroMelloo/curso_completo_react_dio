// classe Cliente
export class Cliente {
  get rg() {
    return this._rg;
  };

  get cpf() {
    return this._cpf
  };

  constructor(nome, rg, cpf) {
    this.nome = nome;
    this._rg = rg;
    this._cpf = cpf;
  }
};