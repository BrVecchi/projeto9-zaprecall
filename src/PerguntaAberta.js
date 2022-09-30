import setaVirar from "./imgs/seta_virar.png";
import styled from "styled-components";
import { useState } from "react";

export default function PerguntaAberta({card}) {
  const [estado, setEstado] = useState("pergunta")

  function mostrarResposta() {
    setEstado("resposta")
    
  }
    return (
      (estado === "pergunta") ? 
    <Pergunta>
      <p>{card.pergunta}</p>
      <ImagemPergAber onClick={mostrarResposta} src={setaVirar} alt="seta girar"/>
    </Pergunta>
    :
  <Pergunta>
      <p>{card.resposta}</p>
    </Pergunta>
    )
}

const Pergunta = styled.div`
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
