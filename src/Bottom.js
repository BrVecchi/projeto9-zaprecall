import styled from "styled-components";
import Botao from "./Botao";

export default function Bottom (props) {
    const texto1 = "Não lembrei"
    const texto2 = "Quase lembrei"
    const texto3 = "Zap!"
    const {VERDE, AMARELO, VERMELHO, CINZA} = props
    const concluidos = 0
    return (
        <Footer>
            <Botoes>
                <Botao texto={texto1} corFundo={VERMELHO}/>
                <Botao texto={texto2} corFundo={AMARELO}/>
                <Botao texto={texto3} corFundo={VERDE}/>
            </Botoes>
            <span>({concluidos}/4) CONCLUÍDOS</span>
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

const Botoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`

