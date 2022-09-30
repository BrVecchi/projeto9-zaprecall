import styled from "styled-components"
import logoImg from "./imgs/logo.png"

export default function Header({estadoBotao, sortearPerguntas})  {
    return (
        (estadoBotao !== "none") ?
        <Logo margin="80px 0 60px 0" height="100vw" flexDirection={"column"}>
            <img width="102px" src={logoImg} alt="Logo imamge"/>
            <h1>ZapRecall</h1>
        <Iniciar display={estadoBotao} onClick={sortearPerguntas}>Iniciar!</Iniciar>
        </Logo>
        :
        <Logo margin="40px 0 20px 0" height="auto" flexDirection={"flex"}>
            <img width="52px" src={logoImg} alt="Logo imamge"/>
            <h1>ZapRecall</h1>
        </Logo>
    )
}

const Logo = styled.div`
    display: flex;
    height: ${props=>props.height};
    flex-direction: ${props=>props.flexDirection};
    justify-content: center;
    align-items: center;
    margin: ${props=>props.margin};
    img {
        width: ${props=>props.width};
      }
    h1 {
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
    }
`

const Iniciar = styled.button`
  width: 160px;
  height: 50px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: ${props=>props.display};
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #D70900;
  background: #FFFFFF;
  border-radius: 5px;
  border: 1px solid ${props => props.color};
  margin-top: 25px;
`
