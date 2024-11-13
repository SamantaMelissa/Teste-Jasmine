// O teste vai se chamar: Teste da Calculadora
    // O primeiro caso de teste: Somas válidas
        // 3+5 = 8;
        // 2+9 = 11;
        // 3+3 = 80;
    // O segundo caso de teste: Subtrações válidas

describe("Teste da Calculadora", function(){
    it("Somas válidas", function(){
        // Espero que a soma de 3 e 5 dê 8
        expect(soma(3,5)).toBe(8);
        expect(soma(2,9)).toBe(11);
        expect(soma(3,3)).toBe(6);
    });
    it("Subtrações válidas", function(){
        // Espero que a soma de 3 e 5 dê 8
        expect(subtracao(90,5)).toBe(85);
        expect(subtracao(9,9)).toBe(0);
        expect(subtracao(3,3)).toBe(0);
    });
});