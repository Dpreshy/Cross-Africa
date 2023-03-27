import React from "react";
import styled from "styled-components";
import Uniheader from "./Uniheader";
const Dashboard = () => {
  return (
    <Container>
      <Uniheader />
      <Wrap></Wrap>
    </Container>
  );
};

export default Dashboard;
// const Container = styled.div``
// const Container = styled.div``
const Wrap = styled.div`
  width: 100%;
  background-color: darkgray;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
