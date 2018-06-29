/**
 * 
      ❏ Spies são objetos falsos utilizados quando queremos manipular algum
      retorno que não faça parte do teste em si
      ❏ Spies são utilizados para isolar somente o bloco de código que estamos
      testando
      ❏ Spies somente poderão ser criados dentro dos blocos “describe” e “it”
      ❏ Spies são removidos ao término da execução da suíte
 */

/**
    ❏ spyOn serve para criar um mock (objeto falso) a ser utilizado nos testes
    ❏ Um objeto spy contém uma série de atributos que serão estudados ao longo
    do capítulo
    ❏ A função spyOn recebe como parâmetros o nome do objeto e do método a
    serem utilizados como mock
 */


describe('Suíte de testes do objeto Spy', function () {

  var calculadora = {

    somar: function (n1, n2) {
      return n1 + n2;
    },

    somarAndCallThrough: function (n1, n2) {
      return n1 + n2;
    },
    somarAndReturnValue: function (n1, n2) {
      return n1 + n2;
    },
    somarAndReturnValues: function (n1, n2) {
      return n1 + n2;
    },
    somarAndCallFake: function (n1, n2) {
      return n1 + n2;
    },
    subtrair: function (n1, n2) {
      return n1 - n2;
    }
  };

  beforeEach(function () {
    //Cria o objeto Spy para uso nos teste
    spyOn(calculadora, 'somar');
    spyOn(calculadora, 'subtrair');
    spyOn(calculadora, 'somarAndCallThrough').and.callThrough();
    spyOn(calculadora, 'somarAndReturnValue').and.returnValue(10);
    spyOn(calculadora, 'somarAndReturnValues').and.returnValues(10, 20);
    spyOn(calculadora, 'somarAndCallFake').and.callFake(function (n1, n2) {
      return n1 - n2;
    });
  });

  it('deve possuir o metodo somar como não definido - toBeUndefined', function () {
    expect(calculadora.somar(1, 1)).toBeUndefined();
  });

  /**
   * Atributo => toHaveBeenCalled()
   * Verifica se um método do spy foi executado pelo menos uma vez
   * É muito utial para confirmar se um metodo foi executado
   */
  it('deve chamar o metodo somar ao menos uma vez - toHaveBeenCalled()', () => {
    calculadora.somar(1, 1);
    //Verifia sefoi chamado
    expect(calculadora.somar).toHaveBeenCalled();
  });
  /**
   *  toHaveBeenCalledTimes serve para verificar quantas vezes um método do
      spy foi chamado
      toHaveBeenCalledTimes recebe como parâmetro o número de execuções a
      ser verificado
  */

  it('deve chamar o metodo somar ao duas (2) vezes - toHaveBeenCalledTimes', () => {
    calculadora.somar(1, 1);
    calculadora.somar(1, 2);
    //Verifia sefoi chamado
    expect(calculadora.somar).toHaveBeenCalledTimes(2);
  });


  /**
   * toHaveBeenCalledWith serve para verificar com quais parâmetros um método
   * do spy foi chamado
   * toHaveBeenCalledWith recebe como parâmetro os valores da chamada do
   * método do spy, separados por vírgula
   */

  it('deve chamar o metodo somar com os parametros válidos - toHaveBeenCalledWith', () => {
    calculadora.somar(1, 1);
    calculadora.somar(1, 2);
    //Verifia se foi chamado com os parametros validos
    expect(calculadora.somar).toHaveBeenCalledWith(1, 1);
    expect(calculadora.somar).toHaveBeenCalledWith(1, 2);
  });

  /**
   *  and.callThrough serve para informar ao spy que o método original deve ser
  executado
   and.callThrough deve ser aplicado ao objeto spy
   Nesse caso o método original será executado, e todos os recursos do spy
  serão mantidos e estarão disponíveis para verificação
   */

  it('deve chamar o metodo somarAndCallThrough original - and.callThrough', () => {
    //Vai chamar a função original
    expect(calculadora.somarAndCallThrough(1, 1)).toEqual(2);
    expect(calculadora.subtrair(2, 2)).toBeUndefined();
  });

  //  and.returnValue serve para informar ao spy o valor de retorno de
  // determinado método
  //  and.returnValue deve ser aplicado ao objeto spy
  it('deve chamar o metodo somarAndReturnValue e retorna valor fixado - and.retunValue', () => {
    //Vai orçar o retorno informado este valor. 
    expect(calculadora.somarAndReturnValue(1, 1)).toEqual(10);
  });

  // ❏ and.returnValues serve para informar ao spy quais os valores a serem
  // retornados por chamada
  // ❏ and.returnValues aceita como parâmetro um ou mais valores, separados por vírgula,
  // and.returnValues(10,20) não retorna dois valores, ele retorna 10 na primeira chamada, e 20 na segunda
  // ❏ Se o número de chamadas for maior do que o de valores a serem retornados,será retornado “undefined”
  // ❏ and.returnValues deve ser aplicado ao objeto spy
  it('deve chamar o metodo somarAndReturnValues e retorna os valores fixados - and.retunValues', () => {
    //Vai forçar os retornos informados este valor. 
    expect(calculadora.somarAndReturnValues(1, 1)).toEqual(10);
    expect(calculadora.somarAndReturnValues(1, 2)).toEqual(20);
    expect(calculadora.somarAndReturnValues(1, 3)).toBeUndefined();
  });

  /**
   ❏ and.callFake serve para definir uma nova implementação para um método de um spy
   ❏ and.callFake deve ser aplicado ao objeto spy
   ❏ and.callFake recebe como parâmetro uma função com a nova implementação
   a ser executada quando o método for chamado
     */
  it('deve transformar o metodo somarAndCallFake em uma subtração - and.callFake()', () => {
    //transforma a soma em subtração . 
    expect(calculadora.somarAndCallFake(7, 2)).toEqual(5);
  });


});