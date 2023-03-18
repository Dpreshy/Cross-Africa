import React from 'react'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'

const Information = () => {
  return (
      <div>
          <Container>
              <Wrapper>
                  <Title>Business Information</Title>
                  <Text>Enter every necessary details to create your own seller account</Text>
                  <InputHold>
                       
                        
                        <Hold>
                            <Name>Business owner or legal representative ID type</Name>
                            <HoldInput>
                                <Input placeholder="Phone Number" />
                            </HoldInput>
                            {true ? null : <Error>Error</Error>}
                        </Hold>
                        
                        <Hold>
                            <Name>Upload a copy of your valid ID card</Name>
                            <HoldInput>
                              <Input type="file" id='pass'/>
                              {/* <Icon>Q</Icon> */}
                            </HoldInput>
                            {true ? null : <Error>Error</Error>}
                      </Hold>
                      <Hold>
                            <Name>CAC Registration Number</Name>
                            <HoldInput>
                                <Input placeholder="Full Name" />
                            </HoldInput>
                            {true ? null : <Error>Error</Error>}
                      </Hold>
                      <Card>
                          <InputFile type="file" />
                          <Image />
                      </Card>
                      <Button>Continue</Button>
                      <AlText>Already have an account? <NavLink to="/auth/signin" style={{textDecoration: "none"}}><span>LogIn</span></NavLink></AlText>
                  </InputHold>
              </Wrapper>
          </Container>
    </div>
  )
}

export default Information

const InputFile = styled.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* opacity: 0px; */
    display: none;
`
const Image = styled.img`
    
    background-color: gold;
    width: 100%;
    height: 100%;
    border-radius: 5px;
`
const Card = styled.label`
    width: 220px;
    height: 220px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
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
`
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
    font-size: 16px;
    font-weight: 600;
    width: 300px;
    margin-bottom: 20px;

`
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