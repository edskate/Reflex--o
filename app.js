document.getElementById("form-ensaio").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capturar os valores da data e hora
    const dataEnsaio = document.getElementById("data").value;
    const horaEnsaio = document.getElementById("hora").value;

    if (dataEnsaio && horaEnsaio) {
        // Formatar a data
        const dataFormatada = new Date(dataEnsaio).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        // Exibir os detalhes do ensaio
        const detalhesEnsaio = `Data: ${dataFormatada}, Hora: ${horaEnsaio}`;
        document.getElementById("detalhes").textContent = detalhesEnsaio;

        // Mostrar a seção de resultado
        document.getElementById("resultado").style.display = "block";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
