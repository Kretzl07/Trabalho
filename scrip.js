const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Salvar todos os cachorros do mundo?",
                afirmacao: "mas, em troca, todos os gatos morrem?",
            },
            {
                texto: "Achar a cura do câncer?",
                afirmacao: "mas, em troca, todas a sua familia morre?",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Não ocorrer mais enchentes?",
                afirmacao: "mas, em troca, você não pode mais ir para a praia?",
            },
            {
                texto: "Acabar com o desmatamento do Mundo?",
                afirmacao:"mas, troca, o Leonardo de Caprio nunca mais faz filme",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Ter o celular mais top do Mundo mas você não tem internet fora de casa?",
                afirmacao: "mas, em troca, você teria que aceitar a implementação de uma vigilância constante em todos os dispositivos conectados à internet?",
            },
            {
                texto: "Dar um celular para todos as pessoas?",
                afirmacao: "mas, em troca, você nunca mais terá acesso à tecnologia?",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if(aatual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta.texto;
       botaoAlternativa.addEventListener("click", ()=> respotaSelecionada(pergunta));
       caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respotaSelecionada(){
    const afirmacao = perguntas.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo, você escolheu "
    caixaResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
