if (true) {
    let frutaLet = "maça";
    var frutaVar = "laranja";
    const frutaConst = "banana";
}
console.log(frutaConst); // Erro! frutaLet não está definido neste escopo
console.log(frutaVar); // laranja (acessivel)
console.log(frutaLet); // Erro! frutaLet não está definido neste escopo 
