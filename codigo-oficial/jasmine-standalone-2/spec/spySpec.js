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

describe("Suíte de testes do tópico 11.1 - Spies", function​ () {

  var​ calculadora = {
    somar: function​ (n1, n2) {
      return​ n1 + n2;
    }
  };

  beforeEach(function​ () {
    //Funçãoque cria o objeto mock a ser usado
    spyOn(calculadora, "somar");
  });

  //  
  it("deve posssuir o metodo somar com undefined", function() {
    expect(calculadora.somar(1,2)).toBeUndefined();
  });
    
});