/**
 * Realiza a comparação de objeto como sendo  'null'
 * Usamos null para dizer que  variavel não possui valor
 * Null é diferente de undefined,pois null é um tipo e
 * undefined ser uma variável não definida.
 */

describe('Comparador "toBeNull"', function () {
    it('deve validar o uso do toBeNull', () => {
        var n1 =null;
        var n2 = undefined
        var n3 = false;
        expect(n1).toBeNull();
        expect(null).toBeNull(); 
        
        //Estão negados para o teste passar.
        expect(n2).not.toBeNull();
        expect(NaN).not.toBeNull(); //É um tipo definido
        expect(n3).not.toBeNull();

    });

});