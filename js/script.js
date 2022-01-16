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

// Aula 1204
// Galeria de bicicletas (na página de bicicleta individual)
// Seleciona a galeria
const galeria = document.querySelectorAll(".bicicleta-imagens img");

// Seleciona o container da galeria
const galeriaContainer = document.querySelector(".bicicleta-imagens");

// Função acionada com o evento de clique
function trocarImagem(event) {
  // Armazena a imagem que foi clicada
  const img = event.currentTarget;

  // Verificar a largura da tela
  // por conta das imagens ficarem em uma única
  // coluna quando aciona a media query
  // o método matchMedia é acionado
  // objeto window, que não precisa ser escrito,
  // pode passar o método direto
  const media = matchMedia("(min-width: 920px)").matches;

  // Checa se media é true
  // ou seja, se a largura da tela
  // é maior do que 1000px
  if (media) {
    // Troca a ordem dos elementos <img>
    // o prepend remove o elemento de onde ele
    // está e move para outra localização
    galeriaContainer.prepend(img);
  }
}

// Função atrelada ao evento de clique
function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

// Adicionar o evento de clique
galeria.forEach(eventosGaleria);

// Aula 1205
// Animação
// Após instalar o plugin js Simple Anime
// e colocar nas páginas index e seguros.

// Obs.: É preciso restringir o acionamento
// do plugin para somente caso ele exista
if (window.SimpleAnime) {
  // ativa o plugin com:
  new SimpleAnime();
}

// As animações são acionadas por meio do atributo
// data-anime colocado nos elementos do html
// e o plugin depende de css
// que são copiados do repositório git
