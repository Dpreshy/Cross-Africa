import React from "react";
import styled from "styled-components";

const Allitems = () => {
  return (
    <Container>
      <Wrapper>
        <Card></Card>
      </Wrapper>
    </Container>
  );
};

export default Allitems;
const Card = styled.div`
  width: 100%;
  height: 300px;
  border: 1.9px solid #d975c0;
  border-radius: 5px;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
