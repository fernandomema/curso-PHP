var phrase = prompt('Introduce una frase');
var count = {};
[...phrase].forEach(letter => count[letter] = -~count[letter] )
for (let char in count) {
    document.write(`El caracter ${char} aparece ${count[char]} veces en la frase <br>`);
}