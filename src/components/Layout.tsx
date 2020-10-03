import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Logo from "./Logo";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Header = styled.header`
  grid-column: 1 / span 5;
  display: flex;
  margin-bottom: 10px;
  background-color: var(--white);
`;

const HeaderTitle = styled.span`
  margin-left: 20px;
  align-self: flex-end;
`;

const Main = styled.main`
  grid-column: 1 / span 5;
`;

export default function Layout({ children }: any) {
  return (
    <Wrapper>
      <GlobalStyles />

      <Header>
        <Logo /> <HeaderTitle> Planned Test </HeaderTitle>
      </Header>
      <Main>{children}</Main>
    </Wrapper>
  );
}
