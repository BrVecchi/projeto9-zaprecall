import styled from "styled-components";

export default function Botao({ texto, corFundo, card, cardsMostrados, setCardsMostrados }) {

  function fecharResposta(card) {
    const novaCardsMostrados = cardsMostrados.map(cardEscolhido => (cardEscolhido === card) ? {numero: cardEscolhido.numero, pergunta:cardEscolhido.pergunta, resposta:cardEscolhido.resposta, estado:"fechado", corTexto: corFundo, decoration: "line-through"} : {numero: cardEscolhido.numero, pergunta:cardEscolhido.pergunta, resposta:cardEscolhido.resposta, estado:cardEscolhido.estado, corTexto: cardEscolhido.corTexto, decoration: cardEscolhido.decoration})
    setCardsMostrados(novaCardsMostrados)
  }

  return <Button onClick={()=>fecharResposta(card)} cor={corFundo}>{texto}</Button>;
}

const Button = styled.button`
  width: 90px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(props) => props.cor};
  border-radius: 5px;
  border: 1px solid ${props => props.color};
  padding: 5px;
`;
