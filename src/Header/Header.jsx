import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BiHelpCircle, BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <img src="/logo 1.png" />
            <div>Cross Africa</div>
          </Logo>
          <Hold>
            <Nav>
              <div>Categories</div>
              <span>
                <AiFillCaretDown />
              </span>
            </Nav>
            <SearchHold>
              <input placeholder="Search product" />
              <button>
                <BiSearch />
              </button>
            </SearchHold>
            <Nav>
              <div> Account</div>
              <span>
                <AiFillCaretDown />
              </span>
            </Nav>
            <Nav>
              <div> Cart</div>
              <span>
                <BsCart />
              </span>
            </Nav>
            <Nav>
              <div>Help</div>
              <span>
                <BiHelpCircle />
              </span>
            </Nav>
            <Nav>
              <FiMenu size="20px" />
            </Nav>
          </Hold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  /* max-width: 2040px; */
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 1px solid lightgray;
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
`;
const Logo = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  /* margin-bottom: 10px; */

  img {
    height: 60px;
    width: 60px;
  }

  div {
    font-weight: 700;
    font-size: 20px;
  }
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;
const Nav = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: gold;
  height: 30px;
  cursor: pointer;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
  }
`;
const SearchHold = styled.div`
  width: 300px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 250px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
