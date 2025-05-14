let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    const mensagem = document.getElementById('mensagem');

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        mensagem.textContent = "Por favor, digite um número entre 1 e 10.";
        return;
    }

    if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Acertou! O número secreto era ${numeroSecreto}.`;
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "Errou! Tente um número MAIOR.";
    } else {
        mensagem.textContent = "Errou! Tente um número MENOR.";
    }
}