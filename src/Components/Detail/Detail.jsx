import React from "react";
import Detailmiddle from "./Detailmiddle";
import Detaildown from "./Detaildown";
import Detailup from "./Detailup";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Wrapper>
        <Detailup />
        <Detailmiddle />
        <Detaildown />
      </Wrapper>
    </Container>
  );
};

export default Detail;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
const Wrapper = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`;
