/**
 * A função beforeEach é executada antes de cada teste ("it(){}")
 * Ela é utulizada para executar uma ação como incializar ou reiniciar um status
 * anetes de cad teste
 */
describe("Teste do beforeEach", function() {

	var contador = 0;
    //É chamada antes de cada caso de teste "it()".
	beforeEach(function() {
		contador++;
	});

	it("deve incrementar o contador para 1", function() {
		expect(contador).toEqual(1);
	});

	it("deve incrementar o contador para 2", function() {
		expect(contador).toEqual(2);
	});
});