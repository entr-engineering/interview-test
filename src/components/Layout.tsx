import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 5vw 45vw;
`;
const Header = styled.header`
  grid-column: 1 / span 5;
  font-family: "Kalam", cursive;
`;
const Main = styled.main`
  grid-column: 1 / span 5;
`;

export default function Layout({children}: any) {
  return (
    <Wrapper>
      <GlobalStyles />

      <Header>Planned Test .</Header>
      <Main>
     {children}
      </Main>
    </Wrapper>
  );
}
