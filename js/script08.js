function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, ''); // Remove tudo que não for número
    const resultado = document.getElementById('resultado');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        resultado.textContent = "CPF inválido.";
        return;
    }

    const validarDigito = (cpf, fatorInicial) => {
        let soma = 0;
        for (let i = 0; i < fatorInicial - 1; i++) {
            soma += parseInt(cpf[i]) * (fatorInicial - i);
        }
        let digito = 11 - (soma % 11);
        return digito > 9 ? 0 : digito;
    };

    const digito1 = validarDigito(cpf, 10);
    const digito2 = validarDigito(cpf, 11);

    if (digito1 === parseInt(cpf[9]) && digito2 === parseInt(cpf[10])) {
        resultado.textContent = "✅ CPF válido!";
    } else {
        resultado.textContent = "❌ CPF inválido.";
    }
}