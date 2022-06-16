// Como podemos melhorar o esse código usando TS? 
// Primeira possibilidade Pessoa1 e Pessoa2
let pessoa1 = {
    nome :"maria",
    idade : 29,
    profissao : "atriz"
};

pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"


let pessoa2={
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

//Segunda possibilidade Pessoa3 e Pessoa4
enum Profissao{
    Atriz,
    Pedreiro
}

type conteudoPessoa ={
    nome: string,
    idade: number,
    profissao?: Profissao
}

let pessoa3: conteudoPessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: conteudoPessoa = {
    nome: "carlos",
    idade: 19
}