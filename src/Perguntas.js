import styled from "styled-components";
import setaVirar from "./imgs/seta_virar.png";
import setaPlay from "./imgs/seta_play.png"

export default function Perguntas(props) {
  const {cardsMostrados} = props

  return (
    <>
    {cardsMostrados.map((card) => 
      <PerguntaFechada>
        <p>{card.pergunta}</p>
        <img src={setaPlay} alt="seta girar"/>
      </PerguntaFechada>)}
      
      {cardsMostrados.map((card) => 
      <PerguntaAberta>
      <p>{card.resposta}</p>
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
