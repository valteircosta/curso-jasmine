/**
 * Função global executada uma única vez "no início da execução" da suite de testes "describe" 
 * Por ser executada um única vez antes dos teste "it()" é ideal para configutações. 
 */
describe("Teste do beforeAll", function () {

	var contador = 0;
	/**
	 * Executada apenas um única vez na suite de teste "describe"
	 */
	beforeAll(function () {
		contador = 10;
	});
	/**
	 * Executado antes de cada teste "it"
	 */
	beforeEach(function () {
		contador++;
	});

	it("deve garantir valor 11 para o contador", function () {
		expect(contador).toEqual(11);
	});

	it("deve garantir valor 12 para o contador", function () {
		expect(contador).toEqual(12);
	});
});