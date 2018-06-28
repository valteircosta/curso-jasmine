/**
 * Realiza a comparação utilizando expressões regulares
 * Caso seja passada uma string ela é compara com o texto
 */
describe("Comparador 'toMatcher'", function () {
    it("deve validar o uso do toMatch", () => {
        var texto = "teste com uso do Jasmine";
        expect(texto).toMatch("Jasmine");
        expect(texto).toMatch(/jasmine/i);
        expect("12345-456").toMatch(/^\d{5}-\d{3}$/);
    });
});