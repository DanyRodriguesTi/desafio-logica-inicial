console.log("Olá mundão!");

let nomeHeroi = "Dany";
let xpHeroi = 7300;
let nivelHeroi;

if (xpHeroi < 1000){
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000){
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000){
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000){
    nivelHeroi = "Ouro";
} else if(xpHeroi <= 8000){
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000){
    nivelHeroi = "Ascendente";
} else if (xpHeroi < 1000){
    nivelHeroi = "Imortal";
} else{
    nivelHeroi = "Radiante"
}

console.log('O Heroi '+ nomeHeroi + ' está no nivel ' + nivelHeroi);