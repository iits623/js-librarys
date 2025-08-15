var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('This is library js')
    .pauseFor(500)
    .deleteChars(10)
    .typeString('<strong>Type Writer </strong>')
    .typeString('library js !!!')
    .pauseFor(2500)
    .start();