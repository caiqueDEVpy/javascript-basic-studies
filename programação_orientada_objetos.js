    // criando uma classe.

class Pessoa{

    // declarando seus atributos.

    constructor(nome,idade){
        this._nome=nome;
        this._idade=idade;
    }



     // construindo get e set para cada atributo.

    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome=nome;
    }
    get idade(){
        return this._idade;

    }
    set idade(idade){
        this._idade=idade;
    }

    
    // declarndo seus metodos.

    falar(mensagem){
        console.log(`${this.nome} está falando ${mensagem}.`)
    }
    bebendo(bebida){
        console.log(`${this.nome} está bebendo ${bebida} no momento.`)
    }












}