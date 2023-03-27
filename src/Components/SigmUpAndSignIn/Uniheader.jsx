import React from "react";
import styled from "styled-components";
const Uniheader = () => {
  return (
    <Container>
      <Wrap>
        <Up></Up>
        <Down></Down>
      </Wrap>
    </Container>
  );
};

export default Uniheader;
// const Container = styled.div``
const Down = styled.div`
  width: 100%;
  height: 50px;
  background-color: grey;
`;
const Up = styled.div`
  width: 100%;
  height: 50px;
  background-color: grey;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
