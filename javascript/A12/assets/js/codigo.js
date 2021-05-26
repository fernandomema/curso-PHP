var fecha = prompt('introduce una fecha');
fecha = fecha.match(/\d{2}([/])\d{2}\1\d{4}/g);
if (fecha) {
    document.write('La fecha cumple el formato');
} else {
    document.write('La fecha no cumple el formato');
}