document.addEventListener('DOMContentLoaded', function() {
    var elementosCDValor = document.querySelectorAll('.CD-valor');

    elementosCDValor.forEach(function(elemento) {
        var texto = elemento.textContent.trim();
        if (texto.length === 2) {
            elemento.classList.remove('CD-valor');
            elemento.classList.add('CD-valor-dois-caracteres');
        } else if (texto.length === 3) {
            elemento.classList.remove('CD-valor');
            elemento.classList.add('CD-valor-tres-caracteres');
        }
    });
});