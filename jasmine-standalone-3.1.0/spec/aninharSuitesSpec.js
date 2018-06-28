/**
 * Aninhar suites consiste e colocar dentro de uma suite outras suites é uma pratica
 * que faz tornar muito grande o arquivo de testes tornando-o complicado
 * 
 */
// Suita master container das demais suites.
describe("Suite externa", function () {

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

		it("deve validar o valor dos contadores", function () {
			expect(contadorInterno).toEqual(1);
			//Continua do beforeEach
			expect(contadorExterno).toEqual(3);
		});
	});
});