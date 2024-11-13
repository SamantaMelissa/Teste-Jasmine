// Teste de maioridade do sistema do Kaua
    // Teste da maior idade
    // Teste da menor idade

 describe("Teste de maioridade do sistema do Kaua", function(){
    it("Teste da MAIOR idade", function(){
        expect(maioridade(18)).toBe('Maior Idade');
    });
    it("Teste da MENOR idade", function(){
        expect(maioridade(10)).toBe('Menor Idade');
    });
 });