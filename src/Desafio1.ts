// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//Forma 1
let funcionario = {
    code: 10,
    name: 'john'

};

funcionario.code = 10;
funcionario.name = "John";

//Forma 2
let funcionario2:{codigo: number, nome: string} ={
    codigo: 10,
    nome: 'John'
}

//Forma 3
interface IFuncionario{
    codigo: number,
    nome: string
}

let funcionario3: IFuncionario ={
    codigo:10,
    nome: 'John'
}
