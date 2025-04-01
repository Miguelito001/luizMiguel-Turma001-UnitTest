const AnaliseDeDados = require('../src/analiseDeDados');

describe('Testes da classe AnaliseDeDados', () => {
    test('Deve normalizar os dados corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });
    test('Deve calcular a soma corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularSoma()).toBe(15);
    });
    test('Deve calcular a soma incorretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularSoma()).not.toBe(10);
    });
    test('Deve calcular o produto corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularProduto()).toBe(120);
    });
    test('Deve calcular o produto incorretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularProduto()).not.toBe(10);
    });

    test('Deve calcular a amplitude corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularAmplitude()).toBe(4);
    });

    test('Deve calcular a amplitude incorretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularAmplitude()).not.toBe(10);
    });

    test('Deve calcular o coeficiente de variação corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(47.14);
    });
    test('Deve remover os outliers corretamente', () => {
        const dados = [1, 2, 3, 4, 5, 100];
        const analise = new AnaliseDeDados(dados);
        analise.removerOutliers();
        expect(analise.dados).toEqual([1, 2, 3, 4, 5]);
    });

    test('Deve calcular o percentil corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularPercentil(25)).toBe(2);
    });
    test('Deve adicionar novos dados corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        analise.adicionarDados([6, 7, 8, 9, 10]);
        expect(analise.dados).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    test('Deve adicionar novos dados incorretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(() => analise.adicionarDados(6)).toThrowError("Os dados devem ser um array.");
    });
    test('Deve limpar os dados corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        analise.limparDados();
        expect(analise.dados).toEqual([]);
    });
    test('Deve calcular a mediana de forma que apresente erro', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularMediana()).not.toBe(2);
    });

    test('Deve calcular a mediana corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularMediana()).toBe(3);
    });
    test('Deve calcular a moda corretamente', () => {
        const dados = [1, 2, 3, 4, 5, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularModa()).toEqual([5]);
    });
    test('Deve calcular a correlação corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const outroConjunto = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularCorrelacao(outroConjunto)).toBeCloseTo(1);
    });
    test('Deve calcular a média corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularMedia()).toBe(3);
    });
    test('Deve calcular a variância corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularVariancia()).toBe(2);
    });
    test('Deve calcular o desvio padrão corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularDesvioPadrao()).toBeCloseTo(1.41);
    });
    test('Deve encontrar o mínimo corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.encontrarMinimo()).toBe(1);
    });
    test('Deve encontrar o máximo corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.encontrarMaximo()).toBe(5);
    });
    test('Deve calcular o produto corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularProduto()).toBe(120);
    });
    test('Deve calcular a amplitude corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularAmplitude()).toBe(4);
    });
    test('Deve calcular o coeficiente de variação corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(47.14);
    });

    test('Deve adicionar novos dados corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        analise.adicionarDados([6, 7, 8, 9, 10]);
        expect(analise.dados).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    test('Deve adicionar novos dados incorretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(() => analise.adicionarDados(6)).toThrowError("Os dados devem ser um array.");
    });
    test('Deve ordenar os dados corretamente', () => {
        const dados = [5, 3, 1, 4, 2];
        const analise = new AnaliseDeDados(dados);
        expect(analise.ordenarDados()).toEqual([1, 2, 3, 4, 5]);
    });
    test('Deve ordenar os dados incorretamente', () => {
        const dados = [5, 3, 1, 4, 2];
        const analise = new AnaliseDeDados(dados);
        expect(analise.ordenarDados()).not.toEqual([5, 3, 1, 4, 2]);
    });

    test('Deve calcular a correlação incorretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const outroConjunto = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularCorrelacao(outroConjunto)).not.toBe(1);
    });
    test('deve apresentar erro ao calcular a correlação', () => {
        const dados = [1, 2, 3, 4, 5];
        const outroConjunto = [1, 2, 3, 4];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularCorrelacao(outroConjunto)).toBe(null);
    });
    test('deve retorna null ao calcular a correlação', () => {
        const dados = [1, 2, 3, 4, 5];
        const outroConjunto = [1, 2, 3, 4];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularCorrelacao(outroConjunto)).toBe(null);
    });
    test('Deve calcular a média corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularMedia()).toBe(3);
    });
    test('Deve calcular a média incorretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularMedia()).not.toBe(2);
    });
    test('Deve calcular a média e retornar null', () => {
        const dados = [];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularMedia()).toBe(null);
    });
    test('Deve calcular a mediana corretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularMediana()).toBe(3);
    });
    test('Deve calcular a mediana incorretamente', () => {
        const dados = [1, 2, 3, 4, 5];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularMediana()).not.toBe(2);
    });
    test('Deve calcular a mediana e retornar null', () => {
        const dados = [];
        const analise = new AnaliseDeDados(dados);
        expect(analise.calcularMediana()).toBe(null);
    });
});