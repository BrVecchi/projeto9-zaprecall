import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ResetCSS from "./ResetCSS";
import Header from "./Header";
import Bottom from "./Bottom";
import Perguntas from "./Perguntas";

export default function App() {
  const VERDE = "#2FBE34"
  const AMARELO = "#FF922E"
  const VERMELHO = "#FF3030"
  const CINZA = "#333333" 
  return (
    <AppContainer>
      <ResetCSS />
      <GlobalStyle />
      <Header/>
      <Perguntas/>
      <Bottom VERDE={VERDE} AMARELO={AMARELO} VERMELHO={VERMELHO} CINZA={CINZA}/>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`