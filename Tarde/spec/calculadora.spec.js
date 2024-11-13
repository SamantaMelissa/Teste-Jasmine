// Teste da calculadora da Gabi
    // Teste da soma válida
    // Teste da subtração válida
    // Teste da divisão válida
describe("Teste da calculadora da Gabi", function(){
    it("Teste da soma válida", function(){
        // O que eu espero do meu teste?
        // Que a soma de 5 + 20 seja 25
        expect(somar(5,20)).toBe(25);
    });

    it("Teste da subtração válida", function(){
        // O que eu espero do meu teste?
        // Que a soma de 100 - 20 seja 80
        expect(subtrair(100,20)).toBe(80);
    });

    it("Teste da divisão válida", function(){
        // O que eu espero do meu teste?
        // Que a soma de 100 / 2 seja 50
        expect(dividir(100,2)).toBe(50);
    });
});