import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ResetCSS from "./ResetCSS";
import Header from "./Header";
import Bottom from "./Bottom";
import Perguntas from "./Perguntas";
import { useState } from "react";

export default function App() {
  const DADOS = [
    {numero: "Pergunta 1", pergunta:"O que é JSX?", resposta:"Uma extensão de linguagem do JavaScript", estado:"fechado"},
    {numero: "Pergunta 2", pergunta:"O React é __", resposta:"uma biblioteca JavaScript para construção de interfaces", estado:"fechado"},
    {numero: "Pergunta 3", pergunta:"Componentes devem iniciar com __", resposta:"letra maiúscula", estado:"fechado"},
    {numero: "Pergunta 4", pergunta:"Podemos colocar __ dentro do JSX", resposta:"expressões", estado:"fechado"},
    {numero: "Pergunta 5", pergunta:"O ReactDOM nos ajuda __", resposta:"interagindo com a DOM para colocar componentes React na mesma", estado:"fechado"},
    {numero: "Pergunta 6", pergunta:"Usamos o npm para __", resposta:"gerenciar os pacotes necessários e suas dependências", estado:"fechado"},
    {numero: "Pergunta 7", pergunta:"Usamos props para __", resposta:"passar diferentes informações para componentes", estado:"fechado"},
    {numero: "Pergunta 8", pergunta:"Usamos estado (state) para __", resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", estado:"fechado"},
  ];

  const [cardsMostrados, setCardsMonstrados] = useState([]);
  const [estadoBotao, setEstadoBotao] = useState("flex")
  console.log(cardsMostrados)

  function sortearPerguntas() {
    const numeroDeCards = prompt("Quantas perguntas quer responder?");
    let novaCardsMostrados = [...cardsMostrados];
    while (novaCardsMostrados.length < numeroDeCards) {
      let dado = DADOS[Math.floor(Math.random() * DADOS.length)];
      if (!novaCardsMostrados.includes(dado)) {
        novaCardsMostrados.push(dado);
      }
    }
    setCardsMonstrados(novaCardsMostrados)
    const estadoBotaoNovo = "none"
    setEstadoBotao(estadoBotaoNovo)
  }

  const VERDE = "#2FBE34";
  const AMARELO = "#FF922E";
  const VERMELHO = "#FF3030";
  const CINZA = "#333333";
  return (
    <AppContainer>
      <ResetCSS />
      <GlobalStyle />
      <Header estadoBotao={estadoBotao} sortearPerguntas={sortearPerguntas}/>
      <Perguntas cardsMostrados={cardsMostrados} setCardsMonstrados={setCardsMonstrados}/>
      <Bottom
        VERDE={VERDE}
        AMARELO={AMARELO}
        VERMELHO={VERMELHO}
        CINZA={CINZA}
      />
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

