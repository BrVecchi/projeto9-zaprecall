import setaVirar from "./imgs/seta_virar.png";
import styled from "styled-components";
import { useState } from "react";
import Botao from "./Botao";

export default function PerguntaAberta({
  card,
  VERDE,
  AMARELO,
  VERMELHO,
  CINZA,
}) {
  const [perguntaOuResposta, setPerguntaOuResposta] = useState("pergunta");
  const [corTexto, setCorTexto] = useState("#33333")
  const [estiloTexto, setEstiloTexto] = useState("unset")
  const texto1 = "Não lembrei";
  const texto2 = "Quase lembrei";
  const texto3 = "Zap!";
  console.log(`o verde é: ${VERDE}`)

  function mostrarResposta() {
    setPerguntaOuResposta("resposta");
  }
  return perguntaOuResposta === "pergunta" ? (
    <Pergunta>
      <span>{card.pergunta}</span>
      <ImagemPergAber
        onClick={mostrarResposta}
        src={setaVirar}
        alt="seta girar"
      />
    </Pergunta>
  ) : (
    <Pergunta>
      <TextoResposta cor={corTexto} estilo={estiloTexto}>{card.resposta}</TextoResposta>
      <Botoes>
        <Botao texto={texto1} corFundo={VERMELHO} card={card} setEstiloTexto={setEstiloTexto} setCorTexto={setCorTexto}/>
        <Botao texto={texto2} corFundo={AMARELO} card={card} setEstiloTexto={setEstiloTexto} setCorTexto={setCorTexto}/>
        <Botao texto={texto3} corFundo={VERDE} card={card} setEstiloTexto={setEstiloTexto} setCorTexto={setCorTexto}/>
      </Botoes>
    </Pergunta>
  );
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
  span {
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

const Botoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;

const TextoResposta = styled.p`
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.cor};
    text-decoration: ${props => props.estilo}
`;
