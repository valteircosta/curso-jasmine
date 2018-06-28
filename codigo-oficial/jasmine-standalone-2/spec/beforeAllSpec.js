describe("Teste do beforeAll", function() {

	var contador = 0;

	beforeAll(function() {
		contador = 10;
	});

	beforeEach(function() {
		contador++;
	});

	it("deve garantir valor 11 para o contador", function() {
		expect(contador).toEqual(11);
	});

	it("deve garantir valor 12 para o contador", function() {
		expect(contador).toEqual(12);
	});
});