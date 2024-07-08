document.addEventListener('DOMContentLoaded', function() {
    var botoesExpandir = document.querySelectorAll('.btn-expandir-inv');

    botoesExpandir.forEach(function(botao) {
        botao.addEventListener('click', function() {
            var container = botao.closest('.item-lista-inventario');
            var divOculta = container.querySelector('.oculto');

            if (divOculta.style.display === 'none' || divOculta.style.display === '') {
                divOculta.style.display = 'block';
                botao.style.transform = 'rotate(180deg)';
                container.style.height = '13.6vw';
            } else {
                divOculta.style.display = 'none';
                botao.style.transform = 'rotate(0deg)';
                container.style.height = '6.4vw';
            }
        });
    });
});


