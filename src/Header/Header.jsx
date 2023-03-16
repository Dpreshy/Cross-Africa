import React,{useState} from 'react';
import styled from 'styled-components';
import { AiFillCaretDown } from "react-icons/ai"
import {BsCart} from "react-icons/bs"
import {BiHelpCircle, BiSearch} from "react-icons/bi"
import {FiMenu} from "react-icons/fi"

const Header = () => {

  const [categories, setCategories] = useState(false)
  const [account, setAccount] = useState(false)
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <img src='/logo 1.png' />
            <div>Cross Africa</div>
          </Logo>
          <Hold>
            <Nav onMouseOver={ () => {
              setCategories(true)
            } } onMouseLeave={ () => {
              setCategories(false)
            }}>
              <div>Categories</div>
              <span><AiFillCaretDown /></span>
            </Nav>
            {
              categories ? (
                <Menu onMouseOver={ () => {
                  setCategories(true)
                } } onMouseLeave={ () => {
                  setCategories(false)
                }}>
                  <Navs>Electronics</Navs>
                  <Navs>Mobile Phones</Navs>
                  <Navs>Clothing & Fashion</Navs>
                  <Navs>Food & Groceries</Navs>
                </Menu>
              ) : null
            }
            <SearchHold>
              <input placeholder='Search product' />
              <button><BiSearch /></button>
            </SearchHold>
            <Nav onMouseOver={ () => {
              setAccount(true)
            } } onMouseLeave={ () => {
              setAccount(false)
            }}>
              <div> Account</div>
              <span><AiFillCaretDown /></span>
            </Nav>
            {
              account ? (
                <AcMenu onMouseOver={ () => {
                  setAccount(true)
                } } onMouseLeave={ () => {
                  setAccount(false)
                }}>
                  <Navs>Profile</Navs>
                  <Navs>Log Out</Navs>
                </AcMenu>
              ) : null
            }
            <Nav>
              <div> Cart</div>
              <span><BsCart /></span>
            </Nav>
            <Nav>
              <div>Help</div>
              <span><BiHelpCircle /></span>
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

const Navs = styled.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;

  :hover{
    background-color: lightgray;
  }
`;
const AcMenu = styled.div`
  width: 210px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #D975C0;
  /* border: 1px solid blue; */
  border-radius: 5px;

  position: absolute;
  top: 60px;
  right: 300px;

  @media (max-width: 768px){
    display: none;
  }
`;
const Menu = styled.div`
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #D975C0;
  border-radius: 5px;

  position: absolute;
  top: 60px;
  left: 150px;

  @media (max-width: 768px){
    display: none;
  }
`;
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

  img{
    height: 60px;
    width: 60px;
  }

  div{
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
  /* background-color: gold; */
  height: 30px;
  cursor: pointer;

  span{
    margin-left: 10px;
    position: relative;
    bottom: -3px;
  }
`;
const SearchHold = styled.div`
  width: 300px;
  height: 40px;
  border: 2px solid #D975C0;
;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input{
    /* height: 40px; */
    width: 250px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button{
    width: 70px;
    height: 40px;
    background-color:  #D975C0;
    border: 0px;
    outline: none;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;