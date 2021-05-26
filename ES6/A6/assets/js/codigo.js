var nombre = prompt('Introduce un nombre');
var initials = nombre.substr(0, 2);
var [firstLetter, secondLetter] = [...initials].map(a => parseInt(a, 36) - 10).filter(a => a >= 0);
document.write(initials.toUpperCase() + (firstLetter + 1) + (secondLetter + 1));