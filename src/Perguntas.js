import styled from "styled-components";
import setaVirar from "./imgs/seta_virar.png";
import setaPlay from "./imgs/seta_play.png"

export default function Perguntas() {
  const PERGUNTAS = ["O que é JSX?", "O React é __", "Componentes devem iniciar com __", "Podemos colocar __ dentro do JSX", "O ReactDOM nos ajuda __", "Usamos o npm para __", "Usamos props para __", "Usamos estado (state) para __"]
  const RESPOSTAS = ["Uma extensão de linguagem do JavaScript", "uma biblioteca JavaScript para construção de interfaces", "letra maiúscula", "expressões", "interagindo com a DOM para colocar componentes React na mesma", "gerenciar os pacotes necessários e suas dependências", "passar diferentes informações para componentes ", "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"]

  return (
    <>
    {PERGUNTAS.map((pergunta) => 
      <PerguntaFechada>
        <p>{pergunta}</p>
        <img src={setaPlay} alt="seta girar"/>
      </PerguntaFechada>)}
      
      {RESPOSTAS.map((resposta) => 
      <PerguntaAberta>
      <p>{resposta}</p>
      <ImagemPergAber src={setaVirar} alt="seta girar"/>
    </PerguntaAberta>)}
    </>
  );
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 30px 15px 30px 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
const ImagemPergAber = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
