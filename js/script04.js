function somarPares() {
    const limite = parseInt(document.getElementById('limite').value);
    let soma = 0;

    if (isNaN(limite) || limite < 1) {
        document.getElementById('resultado').textContent = "Por favor, digite um número válido maior que 0.";
        return;
    }

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    document.getElementById('resultado').textContent = `A soma dos pares de 1 até ${limite} é: ${soma}`;
}
