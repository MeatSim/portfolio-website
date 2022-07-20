const app = document.getElementById('typewriter');

const block = String.fromCharCode(219);

const typewriter = new Typewriter(app, {
    loop: true,
    cursor: block,
});

typewriter
    .pauseFor(1500)
    .typeString('Timothy codes')
    .typeString(' React')
    .pauseFor(2500)
    .typeString(' Native')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('Router')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('dux')
    .pauseFor(2500)
    .deleteChars(5)
    .typeString('JavaScript')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('TypeScript')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('Node.js')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('HTML')
    .pauseFor(2500)
    .deleteChars(4)
    .typeString('CSS')
    .pauseFor(2500)
    .deleteChars(3)
    .typeString('Python')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('SQL')
    .pauseFor(2500)
    .start();