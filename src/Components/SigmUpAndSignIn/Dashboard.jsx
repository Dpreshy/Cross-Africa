import React from "react";
import styled from "styled-components";
import Dashcard from "./Dashcard";
import Uniheader from "./Uniheader";
const Dashboard = () => {
  return (
    <Container>
      <Uniheader />
      <Wrap>
        <Dashcard pr="₦100,000" da="Mar 16" ti="Today" bg="#3d3dee" />
        <Dashcard pr="₦60,000" da="Mar 15" ti="Yesterday" bg="grey" />
        <Dashcard
          pr="₦220,000"
          da="Mar 1 - Mar 16"
          ti="Month to date"
          bg="purple"
        />
        <Dashcard
          pr="₦400,000"
          da="Feb 1 - Feb 29"
          ti="Last month"
          bg="orange"
        />
      </Wrap>
    </Container>
  );
};

export default Dashboard;
// const Container = styled.div``
// const Container = styled.div``
const Wrap = styled.div`
  width: 87%;
  border-top: 1.8px solid grey;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: gold; */

  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
