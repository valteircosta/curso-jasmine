describe("Comparador toEqual", function () {

    it("deve validar o uso do 'toEqual'", function () {
        expect(true).toEqual(true);
        let obj1 = {
            valor: true
        };
        let obj2 = {
            valor: true
        };
        expect(obj1).toEqual(obj2);

    });

});