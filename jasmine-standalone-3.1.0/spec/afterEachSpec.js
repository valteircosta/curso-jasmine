/**
 * Função global que é executado após cada teste
 * Deve ser utilizada para realizar ações após a execução de 
 * cada teste "it()".
 */
describe("Teste do afterEach", function() {

	var contador = 0;

	beforeEach(function() {
		contador++;
	});

	afterEach(function() {
		contador = 0;
	});

	it("deve garantir o valor 1 para o contador", function() {
		expect(contador).toEqual(1);
	});

	it("deve ainda garantir o contador com valor 1", function() {
		expect(contador).toEqual(1);
	});
});