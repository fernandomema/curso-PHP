document.querySelectorAll('.miniatura').forEach(function(miniatura) {
    miniatura.addEventListener('click', function() {
        document.querySelector('.imagen').src = this.src;
        document.querySelector('.pie').innerText = this.getAttribute('alt');
    });
});