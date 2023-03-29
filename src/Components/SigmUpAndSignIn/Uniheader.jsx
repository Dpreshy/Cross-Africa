import React from "react";
import styled from "styled-components";
const Uniheader = () => {
  return (
    <Container>
      <Wrap>
        <Up>
          <Hold></Hold>
          <Hold></Hold>
          <Hold></Hold>
        </Up>
        <Down>
          <Hold></Hold>
          <Hold></Hold>
          <Hold></Hold>
        </Down>
      </Wrap>
    </Container>
  );
};

export default Uniheader;
// const Container = styled.div``
const Hold = styled.div`
  width: 180px;
  height: 40px;
  border-radius: 50px;
  border: 1.8px solid darkgray;
`;
const Down = styled.div`
  width: 100%;
  height: 75px;
`;
const Up = styled.div`
  width: 95%;
  height: 75px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-bottom: 20px;
`;
