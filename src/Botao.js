import styled from "styled-components";

export default function Botao(props) {
  const { texto, corFundo } = props;
  return <B cor={corFundo}>{texto}</B>;
}

const B = styled.button`
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
