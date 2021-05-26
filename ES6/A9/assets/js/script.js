var name = prompt('Introduce tu nombre');
var number = +prompt('Introduce un numero');

var isPrime = true;
for(var i = 2; i < number; i++) {
    if(number % i === 0) {
        isPrime = false;
    }
}
if (isPrime) isPrime = number > 1;

console.log(`${name}, el numero introducido ${!isPrime ? 'no ' : ''}es un numero primo`);