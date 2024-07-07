document.addEventListener('DOMContentLoaded', function() {
    var botoesExpandir = document.querySelectorAll('.btn-expandir-inv');

    botoesExpandir.forEach(function(botao) {
        botao.addEventListener('click', function() {
            var container = botao.closest('.item-lista-inventario');
            var divOculta = container.querySelector('.oculto');
            if (divOculta.style.display === 'none' || divOculta.style.display === '') {
                divOculta.style.display = 'block';
            } else {
                divOculta.style.display = 'none';
            }
        });
    });
});
