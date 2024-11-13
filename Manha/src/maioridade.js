// função que valide se 
    // a idade é < 0 => A idade está inválida
    // a idade < 18 => É menor de idade
    // a idade > 18 => É maior de idade

const maioridade = function(idade){
    if(idade < 0){
        return 'Idade está inválida';
    }else if(idade < 18){
        return 'É MENOR de idade';
    }else{
        return 'É MAIOR de idade';
    }
}