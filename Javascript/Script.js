const contrastToggle = document.getElementById('contrastToggle');
const body = document.body;

    if (localStorage.getItem('contrastMode') === 'enabled') {
        body.classList.add('high-contrast');
        contrastToggle.textContent = 'Normal';
    }

    contrastToggle.addEventListener('click', function() {
        body.classList.toggle('high-contrast');
            
        if (body.classList.contains('high-contrast')) {
            localStorage.setItem('contrastMode', 'enabled');
            contrastToggle.textContent = 'Normal';
        } else {
            localStorage.setItem('contrastMode', 'disabled');
            contrastToggle.textContent = 'Filter';
        }
    });