function isPalindrome(text) {
    text = text.replace(/\s/g, '').toLowerCase();
    let isPalindrome = true;
    for( var i = text.length - 1; i >= 0; i--) {
        if (text.charAt(i) != text.charAt((text.length - 1) - i)) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}
if (isPalindrome(prompt('introduce un texto'))) {
    document.write('El texto es palindromo.');
} else {
    document.write('El texto no es palindromo.');
}