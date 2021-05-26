document.querySelectorAll('p').forEach(p => {
    p.addEventListener('click', ()=> {
        alert('se presionó un párrafo del documento');
    });
});

document.querySelectorAll('table')[1].querySelectorAll('p').forEach(p => {
    p.addEventListener('click', ()=> {
        alert('se presionó un párrafo contenido en la segunda tabla.');
    });
});

