// Aula 1201
// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Aula 1202
// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

// Aula 1203 (OBS.: Futuramente tentar por animação e fechar as perguntas que não foram clicadas para ficar só uma aberta)
// Perguntas frequentes
// Seleciona todos os botões
const perguntas = document.querySelectorAll(".perguntas button");

// Cria a função disparada pelo evento
function ativarPergunta(event) {
  // Identifica o botão que foi clicado
  const pergunta = event.currentTarget;
  // Pega o 'controle' do botão
  const controls = pergunta.getAttribute("aria-controls");
  // Pega a resposta por meio do Id
  const resposta = document.getElementById(controls);

  // Adiciona a classe à resposta
  resposta.classList.toggle("ativa");
  // Cria a const de ativa
  const ativa = resposta.classList.contains("ativa");
  // Troca o aria-expanded do botão para "true"
  pergunta.setAttribute("aria-expanded", ativa); // vai ser "true" se existir e "false" se não existir
}

// Adiciona o event listener em cada pergunta
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

// Para cada item do conjunto de perguntas
// aciona a a função que
// insere o event listener (eventosPerguntas)
perguntas.forEach(eventosPerguntas);
