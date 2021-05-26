var text = prompt('introduce un texto');
var upperCaseText = [...text].map(char => /^[\p{L}]+$/u.test(char) ? String.fromCharCode(char.charCodeAt(0) & 223) : char).join('');
document.write(upperCaseText);