/**
 * Função global executada uma única vez no final da execução da suite de testes "describe" 
 * Por ser executada um única vezno final da execução é ideal para limpesa de valoresgloais
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

	/**
	 * Executado no final da suite testes uma única vez
	 *
	 */
	afterAll(function () {
		contador = 0;
	});

	it("deve garantir valor 11 para o contador", function () {
		expect(contador).toEqual(11);
	});

	it("deve garantir valor 12 para o contador", function () {
		expect(contador).toEqual(12);
	});
});