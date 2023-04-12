import React from "react";
import styled from "styled-components";
const Dashcard = () => {
  return (
    <Container>
      <Top>
        <Text>Today</Text>
        <Title>Mar 16</Title>
      </Top>
      <Bottom>
        <Up>
          <Uptop>
            <Sales>Sales</Sales>
            <Price>$100,000</Price>
          </Uptop>
          <Upbottom>
            <Left>
              <Unit>Order/Unit</Unit>
              <No>
                10 <span>20</span>
              </No>
            </Left>
            <Right>
              <Unit>Return</Unit>
              <No>
                <div>20</div>
              </No>
            </Right>
          </Upbottom>
        </Up>
        <Down></Down>
      </Bottom>
    </Container>
  );
};

export default Dashcard;
// const Container = styled.div``
const Right = styled.div``;
const Left = styled.div``;
const No = styled.div`
  margin-top: 8px;
  span {
    margin-left: 20px;
  }
  div {
    margin-left: 10px;
  }
`;
const Unit = styled.div``;
const Price = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
const Sales = styled.div`
  font-weight: 500;
  font-size: 12px;
`;
const Uptop = styled.div`
  margin-top: 10px;
`;
const Upbottom = styled.div`
  font-weight: lighter;
  width: 100%;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
`;
const Up = styled.div`
  border-bottom: 1.5px solid grey;
  height: 120px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 15px;
  flex-direction: column;
`;
const Down = styled.div`
  border-bottom: 1.5px solid grey;
  height: 150px;
`;
const Title = styled.div`
  font-weight: lighter;
  font-size: 13px;
`;
const Text = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
const Bottom = styled.div`
  width: 100%;
  height: 350px;
  background-color: #f5f5f5;
  padding-bottom: 10px;
  border-radius: 0 0 5px 5px;
`;
const Top = styled.div`
  width: 90%;
  height: 40px;
  background-color: #3d3dee;
  color: white;
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
`;
const Container = styled.div`
  width: 360px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 320px) {
    width: 300px;
  }
  flex-direction: column;
  margin: 20px 20px;
`;
