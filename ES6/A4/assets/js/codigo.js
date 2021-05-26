var phrase = prompt('Introduce una frase');
var count = {};
[...phrase].forEach(letter => count[letter] = -~count[letter] )
for (let char in count) {
    document.write(`El caracter ${char} aparece ${count[char]} veces en la frase <br>`);
}
document.write(`<br>La frase tiene ${phrase.split(' ').length} palabras<br>`);
document.write(`La frase tiene ${phrase.length} letras`);