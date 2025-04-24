function gerarTabuada() {
    const numero =parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    for (let i = 1; i <= 10; 1++){
        const item = document.createElement('li');
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        resultado.appendChild(item);
    }
}