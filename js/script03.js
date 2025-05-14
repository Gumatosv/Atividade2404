function indentificar (){
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(idade)) {
        resultado.textContent = "Por favor, digite uma idade válida.";
    } else if (idade >= 0 && idade <= 12) {
        resultado.textContent = "Você é uma criança.";
    } else if (idade >= 13 && idade <= 17) {
        resultado.textContent = "Você é um adolescente.";
    } else if (idade >= 18 && idade <= 59) {
        resultado.textContent = "Você é um adulto.";
    } else if (idade >= 60) {
        resultado.textContent = "Você é um idoso.";
    } else {
        resultado.textContent = "Idade inválida.";
    }
}