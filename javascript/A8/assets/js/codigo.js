function isEven(number) {
    return number%2 == 0;
}
var number = prompt('Introduce un numero');
document.write("el numero " + number + " " + (isEven(number) ? 'es par' : 'es impar'))