const contrastToggle = document.getElementById('contrastToggle');
const grayscaleToggle = document.getElementById('graysecaleToggle');
const textsizeToggle = document.getElementById('textsizeToggle');
const body = document.body;

    if (localStorage.getItem('contrastMode') === 'enabled') {
        body.classList.add('high-contrast');
        contrastToggle.textContent = 'Normal';
    }
    if (localStorage.getItem('graysecaleMode') === 'enabled') {
        body.classList.add('grayscale');
        grayscaleToggle.textContent = 'Normal';
    }
        if (localStorage.getItem('textsizeMode') === 'enabled') {
        body.classList.add('textsize');
        textsizeToggle.textContent = 'Normal';
    }

    contrastToggle.addEventListener('click', function() {
        body.classList.toggle('high-contrast');
            
        if (body.classList.contains('high-contrast')) {
            localStorage.setItem('contrastMode', 'enabled');
            contrastToggle.textContent = 'Normal';
        } else {
            localStorage.setItem('contrastMode', 'disabled');
            contrastToggle.textContent = 'Contrast mode';
        }
    });

    grayscaleToggle.addEventListener('click', function() {
        body.classList.toggle('grayscale');
            
        if (body.classList.contains('grayscale')) {
            localStorage.setItem('graysecaleMode', 'enabled');
            grayscaleToggle.textContent = 'Normal';
        } else {
            localStorage.setItem('graysecaleMode', 'disabled');
            grayscaleToggle.textContent = 'Graysecale Mode';
        }
    });
    textsizeToggle.addEventListener('click', function() {
        body.classList.toggle('textsize');
            
        if (body.classList.contains('textsize')) {
            localStorage.setItem('textsizeMode', 'enabled');
            textsizeToggle.textContent = 'Normal';
        } else {
            localStorage.setItem('textsizeMode', 'disabled');
            textsizeToggle.textContent = 'Text size Mode';
        }
    });