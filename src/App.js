import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ResetCSS from "./ResetCSS";
import Header from "./Header";
import Bottom from "./Bottom";
import Perguntas from "./Perguntas";
import { useState } from "react";

export default function App() {
  const DECK1 = [
    {
      numero: "Pergunta 1",
      pergunta: "O que é JSX?",
      resposta: "Uma extensão de linguagem do JavaScript",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 2",
      pergunta: "O React é __",
      resposta: "uma biblioteca JavaScript para construção de interfaces",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 3",
      pergunta: "Componentes devem iniciar com __",
      resposta: "letra maiúscula",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 4",
      pergunta: "Podemos colocar __ dentro do JSX",
      resposta: "expressões",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 5",
      pergunta: "O ReactDOM nos ajuda __",
      resposta: "interagindo com a DOM para colocar componentes React na mesma",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 6",
      pergunta: "Usamos o npm para __",
      resposta: "gerenciar os pacotes necessários e suas dependências",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 7",
      pergunta: "Usamos props para __",
      resposta: "passar diferentes informações para componentes",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 8",
      pergunta: "Usamos estado (state) para __",
      resposta:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
  ];
  const DECK2 = [
    {
      numero: "Pergunta 1",
      pergunta: "O que é 2",
      resposta: "Uma extensão de linguagem do JavaScript",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 2",
      pergunta: "O React é 2",
      resposta: "uma biblioteca JavaScript para construção de interfaces",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 3",
      pergunta: "Componentes devem iniciar com __2",
      resposta: "letra maiúscula",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 4",
      pergunta: "Podemos colocar __ dentro do JSX2",
      resposta: "expressões",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 5",
      pergunta: "O ReactDOM nos ajuda __2",
      resposta: "interagindo com a DOM para colocar componentes React na mesma",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 6",
      pergunta: "Usamos o npm para __2",
      resposta: "gerenciar os pacotes necessários e suas dependências",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 7",
      pergunta: "Usamos props para __2",
      resposta: "passar diferentes informações para componentes",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 8",
      pergunta: "Usamos estado (state) para __2",
      resposta:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
  ];
  const DECK3 = [
    {
      numero: "Pergunta 1",
      pergunta: "O que é 3",
      resposta: "Uma extensão de linguagem do JavaScript",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 2",
      pergunta: "O React é 3",
      resposta: "uma biblioteca JavaScript para construção de interfaces",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 3",
      pergunta: "Componentes devem iniciar com __3",
      resposta: "letra maiúscula",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 4",
      pergunta: "Podemos colocar __ dentro do JSX3",
      resposta: "expressões",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 5",
      pergunta: "O ReactDOM nos ajuda __3",
      resposta: "interagindo com a DOM para colocar componentes React na mesma",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 6",
      pergunta: "Usamos o npm para __3",
      resposta: "gerenciar os pacotes necessários e suas dependências",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 7",
      pergunta: "Usamos props para __3",
      resposta: "passar diferentes informações para componentes",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
    {
      numero: "Pergunta 8",
      pergunta: "Usamos estado (state) para __3",
      resposta:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      estado: "fechado",
      corTexto: "#333333",
      decoration: "unset"
    },
  ];

  const decks = [DECK1, DECK2, DECK3]


  const [cardsMostrados, setCardsMostrados] = useState([]);
  const [estadoBotao, setEstadoBotao] = useState("flex");
  const [numeroDeCards, setNumeroDeCards] = useState(0);
  const [deckEscolhido, setDeckEscolhido] = useState({})

  function sortearPerguntas() {
    const novoNumeroDeCards = prompt("Quantas perguntas quer responder? Escolha de 1 à 8");
    setNumeroDeCards(novoNumeroDeCards)
    let novaCardsMostrados = [...cardsMostrados];
    while (novaCardsMostrados.length < novoNumeroDeCards) {
      let dado = deckEscolhido[Math.floor(Math.random() * deckEscolhido.length)];
      if (!novaCardsMostrados.includes(dado)) {
        novaCardsMostrados.push(dado);
      }
    }
    novaCardsMostrados.forEach((card) => {
      const posicao = novaCardsMostrados.indexOf(card);
      card.numero = `Pergunta ${posicao + 1}`;
    });

    setCardsMostrados(novaCardsMostrados);
    const estadoBotaoNovo = "none";
    setEstadoBotao(estadoBotaoNovo);
  }

  const VERDE = "#2FBE34";
  const AMARELO = "#FF922E";
  const VERMELHO = "#FF3030";
  const CINZA = "#333333";
  return (
    <AppContainer>
      <ResetCSS />
      <GlobalStyle />
      <Header estadoBotao={estadoBotao} sortearPerguntas={sortearPerguntas} decks={decks} setDeckEscolhido={setDeckEscolhido}/>
      <Perguntas
        data-identifier="flashcard"
        VERDE={VERDE}
        AMARELO={AMARELO}
        VERMELHO={VERMELHO}
        CINZA={CINZA}
        cardsMostrados={cardsMostrados}
        setCardsMostrados={setCardsMostrados}
      />
      <Bottom cardsMostrados={cardsMostrados} numeroDeCards={numeroDeCards} VERDE={VERDE} AMARELO={AMARELO} VERMELHO={VERMELHO}/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
