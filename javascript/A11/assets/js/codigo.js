function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

var resultados = [];

for (var i = 0; i < 36000; i++) {
    resultados.push(rollDice() + rollDice());
}
console.log(resultados);