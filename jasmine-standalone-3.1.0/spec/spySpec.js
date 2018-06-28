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
    }
  };

  beforeEach(function () {
    //Cria o objeto Spy para uso nos teste
    spyOn(calculadora, 'somar');
  });

  it('deve possuir o metodo somar como não definido', function () {
    expect(calculadora.somar(1, 1)).toBeUndefined();
  });

  /**
   * Atributo => toHaveBeenCalled()
   * Verifica se um método do spy foi executado pelo menos uma vez
   * É muito utial para confirmar se um metodo foi executado
   */
  it('deve chamar o metodo somar ao menos uma vez', () => {
    calculadora.somar(1, 1);
    //Verifia sefoi chamado
    expect(calculadora.somar).toHaveBeenCalled();
  });

});