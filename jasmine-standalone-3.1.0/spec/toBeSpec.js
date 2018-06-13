/**
 * Comparações (Matchers) 
 * São funções que retornam um boleano para ser verificado através de uma 
 * expectation (verificação)
 * Já existe uma série de matchers implementados.
 * É possível criae seu próprio matcher.
 * Todo matcher pode ser negado com 'not'. 
 */

describe('Comparador toBe', function () {

    it('deve validar o uso do "toBe"', function () {
        expect(true).toBe(true);
        expect("Teste").toBe("Teste");
        let obj1 = {
            valor: true
        };
        let obj2 = {
            valor: true
        };
        //Testa somnente a mesma referencia
        expect(obj1).not.toBe(obj2);



    });


});