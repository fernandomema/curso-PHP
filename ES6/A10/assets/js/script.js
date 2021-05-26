document.querySelector('.check').addEventListener('click', () => {
    var name = document.querySelector('#name-input').value;
    var number = +document.querySelector('#number-input').value;

    var isPrime = true;
    for(var i = 2; i < number; i++) {
        if(number % i === 0) {
            isPrime = false;
        }
    }
    if (isPrime) isPrime = number > 1;
    
    console.log(`${name}, el numero introducido ${!isPrime ? 'no ' : ''}es un numero primo`);
    document.querySelector('.color').classList.remove('bg-primary', 'bg-danger', 'bg-success');
    document.querySelector('.color').classList.add(isPrime ? 'bg-success' : 'bg-danger');

})