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
                texto: "Salvar todos os cachorros do mundo, mas, em troca, todos os gatos morrem?",
                afirmacao: "Parabéns você acabou com o ecossistema",
            },
            {
                texto: "Achar a cura do câncer mas, em troca, todas a sua familia morre?",
                afirmacao: "Parabéns perder sua família seria um sacrifício pessoal insuportável, e a dor emocional seria profunda e duradoura.",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Não ocorrer mais enchentes mas, em troca, você não pode mais ir para a praia",
                afirmacao: "Parabéns a prevenção de enchentes evitaria danos econômicos e perda de vidas, além de proteger ecossistemas e propriedades.",
            },
            {
                texto: "Acabar com o desmatamento do Mundo mas, troca, o Leonardo de Caprio nunca mais faz filme",
                afirmacao:"Parabéns a eliminação do desmatamento teria um impacto ambiental extremamente positivo, preservando habitats naturais, combatendo as mudanças climáticas e protegendo espécies ameaçadas.",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Ter o celular mais top do Mundo mas você não tem internet fora de casa mas, em troca, você teria que aceitar a implementação de uma vigilância constante em todos os dispositivos conectados à internet",
                afirmacao: "Parabéns a falta de internet fora de casa limitaria severamente a utilidade do celular, tornando-o quase inútil em muitos cenários do dia a dia, como navegação, comunicação e trabalho remoto.",
            },
            {
                texto: "Dar um celular para todos as pessoas mas, em troca, você nunca mais terá acesso à tecnologia",
                afirmacao: " Parabéns não ter mais acesso à tecnologia significaria ficar sem todas as ferramentas digitais que você usa no cotidiano, desde comunicação e entretenimento até ferramentas de trabalho e educação. Isso poderia ser um grande sacrifício pessoal em troca do benefício global.",
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
