export class Produto {
    nome: string | undefined;
    email: string | undefined;
    valor: number | undefined;
    desconto: number | undefined;
    fabricacao: string | undefined;

    constructor(nome: string | undefined, email: string | undefined, valor: number | undefined, desconto: number | undefined, fabricacao: string | undefined){
        this.nome = nome;
        this.email = email;
        this.valor = valor;
        this.desconto = desconto;
        this.fabricacao = fabricacao;
    }

}
