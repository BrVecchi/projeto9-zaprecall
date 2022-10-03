import setaPlay from "./imgs/seta_play.png"
import erro from "./imgs/icone_erro.png"
import certo from "./imgs/icone_certo.png"
import quase from "./imgs/icone_quase.png"
import styled from "styled-components";


export default function PerguntaFechada({card, cardsMostrados, setCardsMostrados, VERDE, AMARELO, VERMELHO}) {
    function abrirCard(card) {
      const novaCardsMostrados = cardsMostrados.map(cardEscolhido => (cardEscolhido === card) ? {numero: cardEscolhido.numero, pergunta:cardEscolhido.pergunta, resposta:cardEscolhido.resposta, estado:"aberto", corTexto: cardEscolhido.corTexto, decoration: cardEscolhido.decoration} : {numero: cardEscolhido.numero, pergunta:cardEscolhido.pergunta, resposta:cardEscolhido.resposta, estado:cardEscolhido.estado, corTexto: cardEscolhido.corTexto, decoration: cardEscolhido.decoration})
      setCardsMostrados(novaCardsMostrados)
    }
    
    return (
      (card.corTexto === "#333333") ? 
    <Pergunta data-identifier="flashcard-show-btn" onClick={()=>abrirCard(card)} cor={card.corTexto} decoration={card.decoration}>
        <p>{card.numero}</p>
        <img src={setaPlay} alt="seta girar"/>
    </Pergunta> 
    : (card.corTexto === "#FF3030") ? 
    <Pergunta data-identifier="flashcard-show-btn" onClick={()=>abrirCard(card)} cor={card.corTexto} decoration={card.decoration}>
        <p>{card.numero}</p>
        <img data-identifier="flashcard-status" src={erro} alt="seta girar"/>
    </Pergunta> 
    : (card.corTexto === "#FF922E") ? 
    <Pergunta data-identifier="flashcard-show-btn" onClick={()=>abrirCard(card)} cor={card.corTexto} decoration={card.decoration}>
        <p>{card.numero}</p>
        <img data-identifier="flashcard-status" src={quase} alt="seta girar"/>
    </Pergunta> 
    :
    <Pergunta data-identifier="flashcard-show-btn" onClick={()=>abrirCard(card)} cor={card.corTexto} decoration={card.decoration}>
        <p>{card.numero}</p>
        <img data-identifier="flashcard-status" src={certo} alt="seta girar"/>
    </Pergunta> 
    )
}

const Pergunta = styled.div`
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
    color: ${props=>props.cor};
    text-decoration: ${props=>props.decoration};
  }
`;