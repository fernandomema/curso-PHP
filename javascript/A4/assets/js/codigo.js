var valores = [true, 5, false, "hola", "adios", 2];
var palabraLarga = "";
valores.forEach(valor => {
    if (typeof valor === "string" && valor.length > palabraLarga.length) {
        palabraLarga = valor;
    }
})
document.write("La palabra mas larga es: " + palabraLarga + '<br>')
valores.forEach(valor => {
    if (typeof valor === "boolean") document.write('!' + valor + ' = ' + !valor + '<br>')
})
var numeros = [];
valores.forEach(valor => {
    if (typeof valor === "number") numeros.push(valor);
})
document.write(numeros[0] + ' + ' + numeros[1] + ' = ' + (numeros[0] + numeros[1]) + '<br>');
document.write(numeros[0] + ' - ' + numeros[1] + ' = ' + (numeros[0] - numeros[1]) + '<br>');
document.write(numeros[0] + ' * ' + numeros[1] + ' = ' + (numeros[0] * numeros[1]) + '<br>');
document.write(numeros[0] + ' / ' + numeros[1] + ' = ' + (numeros[0] / numeros[1]) + '<br>');
document.write(numeros[0] + ' % ' + numeros[1] + ' = ' + (numeros[0] % numeros[1]) + '<br>');
