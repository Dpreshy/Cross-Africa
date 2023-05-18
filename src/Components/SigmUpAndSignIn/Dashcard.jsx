import React from "react";
import styled from "styled-components";
const Dashcard = ({ pr, da, ti, bg,sales,name}) => {
  return (
    <Box>
      <Boxhold>
        <Up>
          <Text>
            <H1>{name }</H1>
            <Number>{sales}</Number>
          </Text>
        </Up>
        {/* <Down>
          <span>1.5%</span> since last week
        </Down> */}
      </Boxhold>
    </Box>
  );
};

export default Dashcard;

const Box = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  margin: 10px;
`;
const Boxhold = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Up = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 16px;
`;
const Number = styled.div`
  font-size: 16px;
`;
const Mid = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
`;
const Yellow = styled.div`
  background-color: yellow;
  width: 60%;
  height: 100%;
`;
const Down = styled.div`
  color: black;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 60%;

  span {
    color: yellow;
    font-size: 13px;
    font-weight: bold;
  }
  h1 {
    color: skyblue;
    font-size: 13px;
    font-weight: bold;
  }
  h2 {
    color: red;
    font-size: 13px;
    font-weight: bold;
  }
  h3 {
    color: purple;
    font-size: 13px;
    font-weight: bold;
  }
`;