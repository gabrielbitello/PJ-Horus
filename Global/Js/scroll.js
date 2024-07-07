document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        sessionStorage.setItem('scrollPos', window.scrollY);
    });
});

window.onload = function() {
    if (sessionStorage.getItem('scrollPos') !== null) {
        window.scrollTo(0, parseInt(sessionStorage.getItem('scrollPos')));
        sessionStorage.removeItem('scrollPos'); // Limpa após o uso
    }
};