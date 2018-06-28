/**
 * Realiza a comparação de objeto como não sendo  'undefined'
 * Evite usat o 'not.toBeDefined' para deixar o codigo + legivel
 */

describe('Comparador "toBeDefined"', function () {
    it('deve validar o uso do toBeDefined', () => {
        n1 = 10;
        var n2;
        var n3 = undefined;
        expect(n1).toBeDefined();
        expect(null).toBeDefined(); // É um tipo definifo
        expect(NaN).toBeDefined(); //É um tipo definido
        
        //Estão negados para o teste passar.
        //Na prática qdo quisermos undefined devemos usar toBeUndefined
        expect(n2).not.toBeDefined();
        expect(n3).not.toBeDefined();

    });

});