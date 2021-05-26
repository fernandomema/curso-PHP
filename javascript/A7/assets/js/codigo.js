const numero = prompt('Introduce un numero entero');
let r = 1;
for(let i = numero; i > 0; i--){
    r *= i;
}
document.write('el factorial de ' + numero + ' es: ' + r);
