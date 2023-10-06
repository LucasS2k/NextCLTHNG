import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const PageContainerStyled = styled.div`
  min-height: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const PagePreset = ({ children }) => {
  return (
    <>
      <PageContainerStyled>
        <Header />
        <PageContent>{children}</PageContent>
      </PageContainerStyled>
      <Footer />
    </>
  );
};

export default PagePreset;
