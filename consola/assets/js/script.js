var iframe = document.querySelector('iframe');
var buttonA = document.querySelector('.button.A');
buttonA.addEventListener('mousedown', e => {
    iframe.contentWindow.gbPin15 &= 0xFE;
});

buttonA.addEventListener('mouseup', e => {
    iframe.contentWindow.gbPin15 |= 1;
});

document.querySelector('.power').addEventListener('click', function() {
    iframe.setAttribute('src', iframe.getAttribute('src-data'));
})