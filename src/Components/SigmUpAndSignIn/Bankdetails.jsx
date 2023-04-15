import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Bankdetails = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Provide Bank Details</Title>
          <Text>
            Enter every necessary details to create
            <br /> your own seller account{" "}
          </Text>
          <InputHold>
            <Hold>
              <Name>Full Name</Name>
              <HoldInput>
                <Input placeholder="Full Name" />
              </HoldInput>
              {true ? null : <Error>Error</Error>}
            </Hold>
            <Hold>
              <Name>Bank</Name>
              <HoldInput>
                <Input placeholder="Bank" />
              </HoldInput>
              {true ? null : <Error>Error</Error>}
            </Hold>
            <Hold>
              <Name>Account Name</Name>
              <HoldInput>
                <Input placeholder="Account Name" />
              </HoldInput>
              {true ? null : <Error>Error</Error>}
            </Hold>
            <Hold>
              <Name>Account Number</Name>
              <HoldInput>
                <Input placeholder="Account Number" />
              </HoldInput>
              {true ? null : <Error>Error</Error>}
            </Hold>

            <NavLink to="/review" style={{ textDecoration: "none" }}>
              <Button>Continue</Button>
            </NavLink>
          </InputHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Bankdetails;

const Button = styled.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;
const Error = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;

const HoldInput = styled.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
  /* margin-bottom: 5px; */
  /* padding-left: 10px;
    padding-right: 10px; */
`;
const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Hold = styled.div`
  margin-bottom: 10px;
`;
const InputHold = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
