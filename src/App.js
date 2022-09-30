import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ResetCSS from "./ResetCSS";
import Header from "./Header";
import Bottom from "./Bottom";
import Perguntas from "./Perguntas";
import { useState } from "react";

export default function App() {
  const DADOS = [
    {pergunta:"O que é JSX?", resposta:"Uma extensão de linguagem do JavaScript"},
    {pergunta:"O React é __", resposta:"uma biblioteca JavaScript para construção de interfaces"},
    {pergunta:"Componentes devem iniciar com __", resposta:"letra maiúscula"},
    {pergunta:"Podemos colocar __ dentro do JSX", resposta:"expressões"},
    {pergunta:"O ReactDOM nos ajuda __", resposta:"interagindo com a DOM para colocar componentes React na mesma"},
    {pergunta:"Usamos o npm para __", resposta:"gerenciar os pacotes necessários e suas dependências"},
    {pergunta:"Usamos props para __", resposta:"passar diferentes informações para componentes"},
    {pergunta:"Usamos estado (state) para __", resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
  ];

  const [cardsMostrados, setCardsMonstrados] = useState([]);
  const [estadoBotao, setEstadoBotao] = useState("flex")

  function sortearPerguntas() {
    const numeroDeCards = prompt("Quantas perguntas quer responder?");
    let novaArray = [...cardsMostrados];
    while (novaArray.length < numeroDeCards) {
      let dado = DADOS[Math.floor(Math.random() * DADOS.length)];
      if (!novaArray.includes(dado)) {
        novaArray.push(dado);
      }
    }
    setCardsMonstrados(novaArray)
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
      <Header />
      <Iniciar display={estadoBotao} onClick={sortearPerguntas}>Iniciar!</Iniciar>
      <Perguntas cardsMostrados={cardsMostrados} />
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

const Iniciar = styled.button`
  width: 160px;
  height: 50px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: ${props=>props.display};
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: green;
  border-radius: 5px;
  border: 1px solid ${props => props.color};
  position: fixed;
  top: 40%;
`