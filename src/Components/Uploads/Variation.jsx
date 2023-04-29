import React from "react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Uniheader from "../SigmUpAndSignIn/Uniheader";
const Variation = () => {
  return (
    <>
      <Uniheader />
      <Container>
        <Title>Product Variation</Title>
        <Inputhold>
          <Inputcont>
            <Tag>TAG No.*</Tag>
            <Input>
              <input placeholder="name" />
              <span>kindly a unique number</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>Qty*</Tag>
            <Input>
              <input placeholder="brand" />
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>start date*</Tag>
            <Input>
              <input placeholder="11/01/23" type="number" />
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>End date*</Tag>
            <Input>
              <input placeholder="26/09/23" type="number" />
            </Input>
          </Inputcont>
        </Inputhold>
        <Btn>
          <Link to="/upload success">
            <Button>Upload </Button>
          </Link>
        </Btn>
      </Container>
    </>
  );
};

export default Variation;
const Title = styled.div`
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`;
const Btn = styled.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 15px;
`;
const Inputcont = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 18px; */
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 2px;
    border-radius: 4px;
  }
`;
const Tag = styled.div`
  font-size: 15px;
  font-weight: 500;
`;
const Inputhold = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
