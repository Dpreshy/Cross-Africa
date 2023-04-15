import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LandingPageHead = () => {
  const [remove, setRemove] = useState(true);
  const { auth } = useParams();
  console.log(auth);
  const myRef = useRef(null);
  const change = () => {
    if (remove === true) {
      const setValue = (myRef.current.style.display = "none");
    }
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Logo to="/">
            <img src="/logo 1.png" />
            <div>Cross Africa</div>
          </Logo>
          <Hold ref={myRef}>
            <Button
              onClick={change}
              to="/auth"
              bd=""
              bg="ffff"
              hbg=""
              hbd="fff"
            >
              Sign Up
            </Button>
            {/* <Button to="/auth/signin" bd="fgf" bg="" hbg="fff" hbd="">
              Log In
            </Button> */}
          </Hold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default LandingPageHead;

const Container = styled.div`
  width: 100%;
  background-color: #f8ecf5;
  /* max-width: 2040px; */
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0px;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 85px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  text-decoration: none;
  /* margin-bottom: 10px; */

  img {
    height: 50px;
    width: 50px;
  }

  div {
    font-weight: 700;
    font-size: 17px;
    color: white;
  }
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 270px;
`;
const Button = styled(NavLink)`
  padding: 10px 40px;
  border: ${({ bd }) => (bd === "" ? "0px" : "1px solid #D975C0")};
  background-color: ${({ bg }) => (bg === "" ? "transparent" : "#D975C0")};
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 345ms ease-in;
  text-decoration: none;

  :hover {
    background-color: ${({ hbg }) => (hbg === "" ? "transparent" : "#D975C0")};
    border: ${({ hbd }) => (hbd === "" ? "0px" : "1px solid #D975C0")};
  }
`;
