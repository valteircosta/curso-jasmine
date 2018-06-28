/**
 * Realiza a comparação de objeto como sendo  'undefined'
 * Evite usar o 'not.toBeUndefined' para deixar o codigo + legivel
 */

describe('Comparador "toBeUndefined"', function () {
    it('deve validar o uso do toBeUndefined', () => {
        var n1;
        var n2 = undefined
        var n3 = false;
        expect(n1).toBeUndefined();
        expect(null).not.toBeUndefined(); // É um tipo definifo
        expect(NaN).not.toBeUndefined(); //É um tipo definido
        
        //Estão negados para o teste passar.
        //Na prática qdo quisermos undefined devemos usar toBeDefined
        expect(n2).toBeUndefined();
        expect(n3).not.toBeUndefined();

    });

});