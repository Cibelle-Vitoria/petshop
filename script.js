// Preços dos produtos (const = valor que não muda)
const precoRacao = 29.90;
const precoOsso = 14.50;
const precoColeira = 24.90;
const precoShampoo = 19.90;
 
// Função que deixa o número bonito: 59.8 vira "R$ 59,80"
// toFixed(2) deixa sempre 2 casas depois da vírgula
// replace troca o ponto pela vírgula (como a gente escreve no Brasil)
function formatar(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}
 
// Função chamada pelo botão (onclick="simularCompra()" no HTML)
function simularCompra() {
 
  // 1) Pergunta a quantidade de cada produto com prompt()
  //    2) Converte a resposta (que vem como texto) para número com Number()
  const qtdRacao = Number(prompt("Quantas unidades de Ração Premium 1 kg (R$ 29,90)?\nDigite 0 para não comprar."));
  const qtdOsso = Number(prompt("Quantas unidades de Osso de Nylon (R$ 14,50)?\nDigite 0 para não comprar."));
  const qtdColeira = Number(prompt("Quantas unidades de Coleira de Couro (R$ 24,90)?\nDigite 0 para não comprar."));
  const qtdShampoo = Number(prompt("Quantas unidades de Shampoo Neutro 700 ml (R$ 19,90)?\nDigite 0 para não comprar."));
 
  // Se alguma resposta não for um número (ex.: "abc") ou for negativa,
  // avisa e para por aqui. isNaN() significa "não é um número".
  if (isNaN(qtdRacao) || isNaN(qtdOsso) || isNaN(qtdColeira) || isNaN(qtdShampoo) ||
      qtdRacao < 0 || qtdOsso < 0 || qtdColeira < 0 || qtdShampoo < 0) {
    alert("Valor inválido! Digite apenas números iguais ou maiores que 0.");
    return;
  }
 
  // Se todas as quantidades forem zero, não tem compra para mostrar
  if (qtdRacao == 0 && qtdOsso == 0 && qtdColeira == 0 && qtdShampoo == 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }
 
  // 3) Calcula o valor de cada produto: preço × quantidade
  const valorRacao = precoRacao * qtdRacao;
  const valorOsso = precoOsso * qtdOsso;
  const valorColeira = precoColeira * qtdColeira;
  const valorShampoo = precoShampoo * qtdShampoo;
 
  // 4) Soma tudo para achar o total
  const total = valorRacao + valorOsso + valorColeira + valorShampoo;
 
  // 5) Mostra o resultado com alert()  (\n = pular linha)
  alert(
    "RESUMO DA COMPRA\n\n" +
    "Ração Premium 1 kg: " + qtdRacao + " x " + formatar(precoRacao) + " = " + formatar(valorRacao) + "\n" +
    "Osso de Nylon: " + qtdOsso + " x " + formatar(precoOsso) + " = " + formatar(valorOsso) + "\n" +
    "Coleira de Couro: " + qtdColeira + " x " + formatar(precoColeira) + " = " + formatar(valorColeira) + "\n" +
    "Shampoo Neutro 700 ml: " + qtdShampoo + " x " + formatar(precoShampoo) + " = " + formatar(valorShampoo) + "\n\n" +
    "TOTAL DA COMPRA: " + formatar(total)
  );
}
