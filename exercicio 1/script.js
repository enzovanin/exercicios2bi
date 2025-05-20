function calcularTroco() {
    const valorPago = parseFloat(document.getElementById("valorPago").value);
    const precoProduto = parseFloat(document.getElementById("precoProduto").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(valorPago) || isNaN(precoProduto)) {
      resultado.innerText = "Por favor, insira valores válidos.";
      return;
    }
  
    const troco = valorPago - precoProduto;
  
    if (troco < 0) {
      resultado.innerText = `Valor insuficiente. Faltam R$ ${Math.abs(troco).toFixed(2)}`;
    } else {
      resultado.innerText = `Troco: R$ ${troco.toFixed(2)}`;
    }
  }