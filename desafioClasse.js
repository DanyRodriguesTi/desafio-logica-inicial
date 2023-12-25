class heroiAventura{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;
        //Verifica o Tipo de Heroi
        switch(this.tipo){
            case "mago":
                ataque = "Usou Magia!";
                break;
            case "guerreiro":
                ataque = "Usou Espada!";
                break;
            case "monge":
                ataque = "Usou Artes Marciais!";
                break;
            case "ninja":
                ataque = "Usou Shuriken";
                break;
            default:
                ataque = "Usou um ataque Indefinido!";
        }
        console.log(`O Heroi ${this.nome} com ${this.idade} anos, do tipo ${this.tipo} atacou usando ${ataque}`)
    }

}

let heroiMago = new heroiAventura("Ana", 30, "mago")
heroiMago.atacar()

let meuheroiNinja = new heroiAventura("Sarah", 8, "ninja")
meuheroiNinja.atacar()

let heroiguerreiro = new heroiAventura("Fabio", 14, "guerreiro")
heroiguerreiro.atacar()