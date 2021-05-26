
document.querySelector('button').addEventListener('click', () => {
    var radius = document.querySelector('input').value;
    var perimeter = 2 * Math.PI * radius;
    var area = Math.PI * (radius * radius);
    document.write(`El perimetro del circulo es: ${perimeter}<br>`);
    document.write(`El area del circulo es: ${area}`);
}) 