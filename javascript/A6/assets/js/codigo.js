var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni = prompt('Introduce tu numero de DNI');
var numericDni = dni.match(/(\d+)/)[0];
var dniLetter = dni.substr(8, 1).toUpperCase();
if (dni < 0 || dni > 99999999) {
    document.write("<h1>El numero proporcionado no es valido</h1>");
} else {
    if (letras[numericDni % 23] == dniLetter) {
        document.write("La letra del DNI es correcta");
    } else {
        document.write("La letra del DNI es incorrecta");
    }
}
