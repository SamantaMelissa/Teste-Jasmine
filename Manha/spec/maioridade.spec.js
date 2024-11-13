describe("validação da maioridade", function(){
    it("Validar se é MENOR", function(){
        expect(maioridade(16)).toBe("É MENOR de idade")
    });
    it("Validar se é MAIOR", function(){
        expect(maioridade(55)).toBe("É MAIOR de idade")
    });
});