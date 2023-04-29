import React from "react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Uniheader from "../SigmUpAndSignIn/Uniheader";

const Uploadimg = () => {
  return (
    <>
      <Uniheader />
      <Container>
        <Top>
          <span>Upload Product Image *</span>
          <Hold>
            <Box>
              <BiPlus fontSize="25px" />
            </Box>
            <Box>
              <BiPlus fontSize="25px" />
            </Box>
            <Box>
              <BiPlus fontSize="25px" />
            </Box>
          </Hold>
          <div>Upload at least 2 photos</div>
        </Top>
        <Inputhold>
          <Inputcont>
            <Tag>Name*</Tag>
            <Input>
              <input placeholder="name" />
              <span>kindly specify name of product</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>Brand*</Tag>
            <Input>
              <input placeholder="brand" />
              <span>kindly specify brand of product</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>RAM*</Tag>
            <Input>
              <input placeholder="RAM" />
              <span>kindly specify RAM of product</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>Condition*</Tag>
            <Input>
              <input placeholder="condition" />
              <span>kindly specify condition of product</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>Description*</Tag>
            <Input>
              <input placeholder="description" />
              <span>kindly specify description of product</span>
            </Input>
          </Inputcont>
        </Inputhold>
        <Btn>
          <Link to="/product variation">
            <Button>Enter Product Variation</Button>
          </Link>
        </Btn>
      </Container>
    </>
  );
};

export default Uploadimg;
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
  padding: 13px 0;
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
const Hold = styled.div`
  display: flex;
  width: 340px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 1.9px solid grey;
  background-color: #f3ede3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  /* margin: 10px; */
`;
const Top = styled.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
