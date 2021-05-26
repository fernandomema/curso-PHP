function printTextInfo(text) {
    if (text.toUpperCase() == text) {
        document.write('El texto esta escrito en mayusculas');
    } else if(text.toLowerCase() == text) {
        document.write('El texto esta escrito en minusculas');
    } else {
        document.write('El documento contiene mayusculas y minusculas')
    }
}

printTextInfo(prompt('Introduce un texto'));
