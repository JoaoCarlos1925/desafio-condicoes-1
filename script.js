function processarCliente() {
    const nomeFuncionario = document.getElementById("nomeFuncionario").value;
    const nomeCliente = document.getElementById("nomeCliente").value;
    const statusCliente = document.querySelector('input[name="statusCliente"]:checked').value;

    let mensagem = `Funcionário: ${nomeFuncionario}\nCliente: ${nomeCliente}\n`;

    if (statusCliente === "vivo") {
        mensagem += "Cliente está vivo. Mensalidade cobrada.";
    } else if (statusCliente === "morto") {
        mensagem += "Cliente está morto. Contrato encerrado e funeral liberado.";
    }

    alert(mensagem);
}
