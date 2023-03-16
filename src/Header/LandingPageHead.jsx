import React,{useRef} from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom'

const LandingPageHead = () => {

  // const myRef = useRef()
  // const { auth } = useParams()
  // console.log(auth)
  
  // if (auth === "auth") {
  //   const i = myRef.current.myAuth. = "none"
  //   return i
  // }
  return (
      <div>
          <Container>
              <Wrapper>
                <Logo>
                    <img src='/logo 1.png' />
                    <div>Cross Africa</div>
                  </Logo>
                  <Hold>
                      <Button bd="" bg="ffff">Sign Up</Button>
                      <Button bd="fgf" bg="">Log In</Button>
                  </Hold>
              </Wrapper>
          </Container>
    </div>
  )
}

export default LandingPageHead;

const Container = styled.div`
  width: 100%;
  /* max-width: 2040px; */
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: fixed;
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const Logo = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  /* margin-bottom: 10px; */

  img{
    height: 60px;
    width: 60px;
  }

  div{
    font-weight: 700;
    font-size: 20px;
    color: white;
  }
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
`;
const Button = styled.button`
    padding: 15px 40px;
    border: ${({bd}) => (bd === "" ? "0px" : "1px solid #D975C0")};
    background-color: ${({ bg }) => (bg === "" ? "transparent" : "#D975C0")};
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;