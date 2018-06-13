/**
 * - Verificações servem para validar o resultado de um teste.
 * - O jasmine possui uma função global chamada 'expect', * que recebe como 
 * argumento o resultdo a ser verifcado.
 * - O 'expect' deve ser utilizado em conjunto com uma comparação (Matcher), que
 * conterá o valor a ser comparado
 * - Uma Spec podera conter uma ou mais verificações ('expect').
 * - Uma boa pratica é sempre manter as verificações no final da função 
 */

describe("Expect (verificação)", function () {
    it("Deve garantir que (1+1) é 2", function () {
        expect(1 + 1).toBe(2);
    });
});