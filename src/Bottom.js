import styled from "styled-components";
import erro from "./imgs/icone_erro.png"
import certo from "./imgs/icone_certo.png"
import quase from "./imgs/icone_quase.png"


export default function Bottom ({cardsMostrados, numeroDeCards, VERDE, AMARELO, VERMELHO}) {
    const arrayDeUns = cardsMostrados.map((card) => (card.corTexto !== "#333333") ? 1 : null)
    const numeroDeConcluidos = (arrayDeUns.filter((element) => element===1).length)
    const concluidos = numeroDeConcluidos

    return (
        <Footer>
            <span>({concluidos}/{numeroDeCards}) CONCLUÍDOS</span>
            <FilaResposta>
            {cardsMostrados.map((card) => (card.corTexto === VERDE) ? <img src={certo} alt="icone certo"/> : (card.corTexto === VERMELHO) ? <img src={erro} alt="icone erro"/> : (card.corTexto === AMARELO) ? <img src={quase} alt="icone quase"/> : null)}
            </FilaResposta>
        </Footer>
    )
}

const Footer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

const FilaResposta = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    img {
        margin: 5px;
    }
`