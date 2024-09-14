document.addEventListener("DOMContentLoaded", function () {
    // Verificar se há dados salvos no localStorage
    const dataSalva = localStorage.getItem("dataEnsaio");
    const horaEntradaSalva = localStorage.getItem("horaEntrada");
    const horaSaidaSalva = localStorage.getItem("horaSaida");

    if (dataSalva && horaEntradaSalva && horaSaidaSalva) {
        // Se houver dados, exibir na tela
        exibirDetalhesEnsaio(dataSalva, horaEntradaSalva, horaSaidaSalva);
        document.getElementById("data").value = dataSalva;
        document.getElementById("horaEntrada").value = horaEntradaSalva;
        document.getElementById("horaSaida").value = horaSaidaSalva;
    }
});

document.getElementById("form-ensaio").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capturar os valores da data e dos horários
    const dataEnsaio = document.getElementById("data").value;
    const horaEntrada = document.getElementById("horaEntrada").value;
    const horaSaida = document.getElementById("horaSaida").value;

    if (dataEnsaio && horaEntrada && horaSaida) {
        // Salvar a data e os horários no localStorage
        localStorage.setItem("dataEnsaio", dataEnsaio);
        localStorage.setItem("horaEntrada", horaEntrada);
        localStorage.setItem("horaSaida", horaSaida);

        // Exibir os detalhes do ensaio
        exibirDetalhesEnsaio(dataEnsaio, horaEntrada, horaSaida);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

function exibirDetalhesEnsaio(data, horaEntrada, horaSaida) {
    // Formatar a data
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // Exibir os detalhes do ensaio
    const detalhesEnsaio = `Data: ${dataFormatada}, Entrada: ${horaEntrada}, Saída: ${horaSaida}`;
    document.getElementById("detalhes").textContent = detalhesEnsaio;

    // Mostrar a seção de resultado
    document.getElementById("resultado").style.display = "block";
}
