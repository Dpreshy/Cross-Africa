import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";

const Review = () => {
  return (
    <Container>
      <Card>
        <Icon>
          <AiOutlineCheck fontSize="40px" color="green" />
        </Icon>
        <Text>
          Account Information has been
          <br /> received and will be reviewed <br />
          shortly.
        </Text>
        <Button>
          <button>Start Selling</button>
        </Button>
      </Card>
    </Container>
  );
};

export default Review;
const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 280px;
  height: 170px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;
const Icon = styled.div``;
const Button = styled.div`
  width: 50%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 15px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`;
const Text = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;
