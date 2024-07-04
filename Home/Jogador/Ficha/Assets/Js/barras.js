document.addEventListener('DOMContentLoaded', function () {
    let maxVida = 100;
    let currentVida = 43;

    const barraVida = document.getElementById('barra-Vida');
    const valorVida = document.getElementById('valor-Vida');

    function updateVida(change) {
        currentVida = Math.max(0, Math.min(maxVida, currentVida + change));
        barraVida.style.width = (currentVida / maxVida * 100) + '%';
        valorVida.textContent = currentVida.toString().padStart(3, '0') + '/' + maxVida;
    }

    document.getElementById('-5_Vida').addEventListener('click', function () {
        updateVida(-5);
    });

    document.getElementById('-1_Vida').addEventListener('click', function () {
        updateVida(-1);
    });

    document.getElementById('+1_Vida').addEventListener('click', function () {
        updateVida(1);
    });

    document.getElementById('+5_Vida').addEventListener('click', function () {
        updateVida(5);
    });
    updateVida(0);
});




document.addEventListener('DOMContentLoaded', function () {
    let maxSanidade = 100;
    let currentSanidade = 23;

    const barraSanidade = document.getElementById('barra-Sanidade');
    const valorSanidade = document.getElementById('valor-Sanidade');

    function updateSanidade(change) {
        currentSanidade = Math.max(0, Math.min(maxSanidade, currentSanidade + change));
        barraSanidade.style.width = (currentSanidade / maxSanidade * 100) + '%';
        valorSanidade.textContent = currentSanidade.toString().padStart(3, '0') + '/' + maxSanidade;
    }

    document.getElementById('-5_Sanidade').addEventListener('click', function () {
        updateSanidade(-5);
    });

    document.getElementById('-1_Sanidade').addEventListener('click', function () {
        updateSanidade(-1);
    });

    document.getElementById('+1_Sanidade').addEventListener('click', function () {
        updateSanidade(1);
    });

    document.getElementById('+5_Sanidade').addEventListener('click', function () {
        updateSanidade(5);
    });
    updateSanidade(0);
});




document.addEventListener('DOMContentLoaded', function () {
    let maxPE = 100;
    let currentPE = 43;

    const barraPE = document.getElementById('barra-PE');
    const valorPE = document.getElementById('valor-PE');

    function updatePE(change) {
        currentPE = Math.max(0, Math.min(maxPE, currentPE + change));
        barraPE.style.width = (currentPE / maxPE * 100) + '%';
        valorPE.textContent = currentPE.toString().padStart(3, '0') + '/' + maxPE;
    }

    document.getElementById('-5_PE').addEventListener('click', function () {
        updatePE(-5);
    });

    document.getElementById('-1_PE').addEventListener('click', function () {
        updatePE(-1);
    });

    document.getElementById('+1_PE').addEventListener('click', function () {
        updatePE(1);
    });

    document.getElementById('+5_PE').addEventListener('click', function () {
        updatePE(5);
    });
    updatePE(0);
});


