// 1. Eventos de mouse
const caixa = document.getElementById("caixa");

caixa.addEventListener("click", function() {
    caixa.style.backgroundColor = "#e76f51";
});

caixa.addEventListener("mouseenter", function() {
    caixa.textContent = "Mouse está aqui!";
});

caixa.addEventListener("mouseleave", function() {
    caixa.textContent = "Passe o mouse ou clique aqui!";
});


// 2. Eventos de teclado
const texto = document.getElementById("texto");
const tecla = document.getElementById("tecla");
const mensagem = document.getElementById("mensagem");

texto.addEventListener("keydown", function(event) {
    tecla.textContent = "Você pressionou: " + event.key;

    if (event.key === "Enter") {
        mensagem.textContent = "Texto enviado com sucesso!";
        alert("Submissão rápida do texto!");
    }
});


// 3. Contador dinâmico
let numero = 0;

const contador = document.getElementById("contador");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

function atualizarContador() {
    contador.textContent = numero;
}

aumentar.addEventListener("click", function() {
    numero++;
    atualizarContador();
});

diminuir.addEventListener("click", function() {
    numero--;
    atualizarContador();
});


// Atalhos do teclado
document.addEventListener("keydown", function(event) {
    // Evita que as setas alterem o contador enquanto
    // o usuário estiver digitando no campo de texto.
    if (event.target.tagName === "INPUT") {
        return;
    }

    if (event.key === "ArrowUp") {
        numero++;
        atualizarContador();
    }

    if (event.key === "ArrowDown") {
        numero--;
        atualizarContador();
    }
});
