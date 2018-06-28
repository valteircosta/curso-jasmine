/**
 * Paradesabilitar uma suite  basta renomearpa xdescribe
 */
// Suita master container das demais suites.
describe("Suite desabilitar testes", function () {

	var contadorExterno = 0;

	beforeEach(function () {
		contadorExterno++;
	});

	it("deve conter 1 para contadorExterno", function () {
		expect(contadorExterno).toEqual(1);
	});
	//suite interna 1
	describe("Suite interna 1", function () {

		var contadorInterno = 0;

		beforeEach(function () {
			contadorInterno++;
		});

		it("deve validar o valor dos contadores", function () {
			expect(contadorInterno).toEqual(1);
			expect(contadorExterno).toEqual(2);
		});
	});

	//suite interna 2
	describe("Suite interna 2", function () {

		var contadorInterno = 0;

		beforeEach(function () {
			contadorInterno++;
		});

		//Desabilitando testes bast renomear  ou usar a função pendig 
		xit("deve validar o valor dos contadores", function () {
			expect(contadorInterno).toEqual(1);
			//Continua do beforeEach
			expect(contadorExterno).toEqual(3);
		});

		//Desabilitando testes com a função pendig 
		it("deve validar o valor dos contadores", function () {
			expect(contadorInterno).toEqual(1);
			//Continua do beforeEach
			expect(contadorExterno).toEqual(3);
			pending("Desabilitado usando a função pendig");
		});
	});
});