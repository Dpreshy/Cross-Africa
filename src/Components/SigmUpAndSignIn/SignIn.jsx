import React from 'react'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

const SignIn = () => {

    // const [show, setShow] = useState(false)
  return (
      <div>
          <Container>
              <Wrapper>
                  <Title>Seller Account</Title>
                  <Text>Please enter every necessary information</Text>
                  <InputHold>
                        <Hold>
                            <Name>Email Address</Name>
                            <HoldInput>
                                <Input placeholder="Email Address" type="email" />
                            </HoldInput>
                            {true ? null : <Error>Error</Error>}
                        </Hold>
                        <Hold>
                            <Name>Password</Name>
                            <HoldInput>
                              <Input placeholder="Password" type="password" id='pass'/>
                              <Icon onClick={ () => {
                                  let check = document.getElementById("pass")
                                  if (check.type === "password") {
                                      check.type = "text"
                                  } else {
                                      check.type = "password"
                                  }
                              }}>Q</Icon>
                            </HoldInput>
                            {true ? null : <Error>Error</Error>}
                      </Hold>
                      <PassHold>
                          Forget Password?
                      </PassHold>
                      <Button>Log In</Button>
                      <Button>Continue as a Guest</Button>
                      <AlText>Don't have an account? <NavLink to="/auth/signin" style={{textDecoration: "none"}}><span>Sign Up</span></NavLink></AlText>
                  </InputHold>
              </Wrapper>
          </Container>
    </div>
  )
}

export default SignIn

const PassHold = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 360px;
`;
const AlText = styled.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`;
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
const Icon = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
`
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
`
const Text = styled.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    width: 250px;
`
const Title = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
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