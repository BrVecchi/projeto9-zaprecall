import styled from "styled-components";


export default function Bottom ({cardsMostrados, numeroDeCards}) {
    const arrayDeUns = cardsMostrados.map((card) => (card.corTexto !== "#333333") ? 1 : null)
    const numeroDeConcluidos = (arrayDeUns.filter((element) => element===1).length)
    const concluidos = numeroDeConcluidos

    return (
        <Footer>
            <span>({concluidos}/{numeroDeCards}) CONCLUÍDOS</span>
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