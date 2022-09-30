import styled from "styled-components"
import logoImg from "./imgs/logo.png"

export default function Header()  {
    return (
        <Logo>
            <img src={logoImg} alt="Logo imamge"/>
            <h1>ZapRecall</h1>
        </Logo>
    )
}

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
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
