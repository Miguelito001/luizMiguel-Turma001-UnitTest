const Banco = require("../src/banco");

describe("Testes da classe Banco", () => {
  let conta;

  test("Depositar dinheiro", () => {
    conta = new Banco("Maria", 100);
    conta.depositar(50);
    expect(conta.obterSaldo()).toBe(150);
  });

    test("Sacar dinheiro", () => {
        conta = new Banco("Maria", 100);
        conta.sacar(50);
        expect(conta.obterSaldo()).toBe(50);
    });

    test("Transferir dinheiro", () => {
        const conta1 = new Banco("Maria", 100);
        const conta2 = new Banco("João", 50);
        conta1.transferir(50, conta2);
        expect(conta1.obterSaldo()).toBe(50);
        expect(conta2.obterSaldo()).toBe(100);
    });

    test("Obter saldo atual", () => {
        conta = new Banco("Maria", 100);
        expect(conta.obterSaldo()).toBe(100);
    });

    test("Obter histórico de transações", () => {
        conta = new Banco("Maria", 100);
        conta.depositar(50);
        conta.sacar(30);
        expect(conta.obterHistorico()).toEqual([
            { tipo: 'Depósito', valor: 50 },
            { tipo: 'Saque', valor: 30 }
        ]);
    });

    test("Definir limite de saque", () => {
        conta = new Banco("Maria", 100);
        conta.definirLimiteDeSaque(100);
        expect(conta.limiteDeSaque).toBe(100);
    });

    test("Verificar limite de saque", () => {
        conta = new Banco("Maria", 100);
        conta.definirLimiteDeSaque(100);
        expect(conta.verificarLimiteDeSaque(50)).toBe(true);
    });

    test("Aplicar juros ao saldo", () => {
        conta = new Banco("Maria", 100);
        conta.aplicarJuros(10);
        expect(conta.obterSaldo()).toBe(110);
    });

    test("Pagar conta", () => {
        conta = new Banco("Maria", 100);
        conta.pagarConta(50);
        expect(conta.obterSaldo()).toBe(50);
    });

    test("Obter o total de depósitos", () => {
        conta = new Banco("Maria", 100);
        conta.depositar(50);
        expect(conta.obterTotalDepositado()).toBe(150);
    });
});