# Pet Love: Simulador de Compras

**Projeto:** Desafio 1 – Minha Loja: Simulador de Compras
**Aluna:** Cibelle Vitoria Santos Veras
**Trilha:** Desenvolvimento Mobile | Programa Trilhas 2026
### Produtos e preços

| Produto | Descrição | Preço |

 Ração Premium 1 kg | Ração completa para cães adultos | R$ 29,90 |
 Osso de Nylon | Mordedor resistente que ajuda a limpar os dentes | R$ 14,50 |
 Coleira de Couro | Coleira de couro vermelha com fivela, resistente e ajustável | R$ 24,90 |
 Shampoo Neutro 700 ml | Shampoo neutro para todos os tipos de pelo | R$ 19,90 |

Os mesmos preços estão no início do `script.js`.



> As fotos dos produtos (ração, coleira e shampoo) tirei da internet

##  Tecnologias

- **HTML**: estrutura da página
- **CSS**: cores, caixas (padding, border, margin), efeito `:hover` e `transition`
- **JavaScript**: `prompt()`, `alert()`, `Number()`, `if` e funções


##  Como executar

1. Baixe ou clone o repositório.
2. Deixe os arquivos juntos na mesma pasta.
3. Abra o `index.html` no navegador.
4. Clique em **"Simular compra"** e responda às perguntas.



## Captura de tela

<img width="1905" height="991" alt="image" src="https://github.com/user-attachments/assets/42bc2338-e079-4fff-8205-fc0940eac7c1" />


##  Como a simulação funciona

Ao clicar no botão (`onclick="simularCompra()"`), a função:

1. pergunta a quantidade de cada produto com `prompt()`;
2. converte cada resposta em número com `Number()`;
3. calcula o valor de cada produto (preço × quantidade);
4. soma tudo para achar o total;
5. mostra o resumo com `alert()`.

Se todas as quantidades forem 0, aparece "Nenhum produto foi selecionado." Se o usuário digitar algo que não é número (ou um número negativo), aparece um aviso de valor inválido.



##  Testes realizados

Testei com respostas simuladas e também clicando no botão no navegador, sem erros no console.

| # | Entrada (Ração, Osso, Coleira, Shampoo) | Resultado |

| 1 | 2, 1, 3, 0 | Total R$ 149,00 (59,80 + 14,50 + 74,70) 
<img width="490" height="275" alt="image" src="https://github.com/user-attachments/assets/63d4f4cd-5fb3-4d8a-b260-780d3fc00bfd" />



| 2 | 0, 0, 0, 0 | "Nenhum produto foi selecionado."        
<img width="441" height="125" alt="image" src="https://github.com/user-attachments/assets/e737b706-a668-4f25-adc1-3aca7322793d" />

| 3 | 0, 0, 0, 3 | Total R$ 59,70                                   
<img width="438" height="269" alt="image" src="https://github.com/user-attachments/assets/87febc41-d144-40e6-a281-50ac8a2c1dc5" />

| 4 | 1, `abc`, 0, 0 | Aviso de valor inválido                     
<img width="423" height="150" alt="image" src="https://github.com/user-attachments/assets/b0f76f3c-e4ac-4324-b090-fe6508b80391" />

| 5 | -1, 0, 0, 0 | Aviso de valor inválido                         
<img width="425" height="131" alt="image" src="https://github.com/user-attachments/assets/c1d442bf-85e2-4646-8c42-03fd3542e161" />


| 6 | Clicar em "Cancelar" nas perguntas | "Nenhum produto foi selecionado."

<img width="439" height="134" alt="image" src="https://github.com/user-attachments/assets/eb7ab973-fc64-4fcc-93ed-d1ce0200e1a2" />

| 7 | Testei a responsividade pelo F12 do navegador (modo celular), com larguras de 360, 375 e 414 px: sem rolagem lateral e com os produtos legíveis.
**O que poderia melhorar:** os cartões têm altura fixa (`height: 340px`) e largura fixa (`220px`), o que deixa espaço em branco embaixo e não aproveita telas maiores.


##  Dificuldade encontrada e o que aprendi

**Dificuldade:** o `prompt()` devolve a resposta como **texto**, e não como número. Se eu tentasse calcular direto, o resultado sairia errado. Também precisei tratar o caso de a pessoa digitar letras, que viram `NaN` ao usar `Number()`.

**O que aprendi:**
- `toFixed(2)` deixa o valor com 2 casas decimais, bom para mostrar dinheiro.
- Uma função pode ser chamada direto no HTML com `onclick`.
