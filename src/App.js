import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ResetCSS from "./ResetCSS";

export default function App() {
  return (
    <div>
      <ResetCSS />
      <GlobalStyle />
      <span>Deu certo!</span>
    </div>
  );
}
