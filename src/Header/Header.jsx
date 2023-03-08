import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <img src='/logo 1.png' />
            <div>Cross Africa</div>
          </Logo>
          <Hold>
            <Nav>
              Categories
              <span>=</span>
            </Nav>
            <SearchHold>
              <input placeholder='Search product' />
              <button>Q</button>
            </SearchHold>
            <Nav>
              Account
              <span>=</span>
            </Nav>
            <Nav>
              Cart
              <span>=</span>
            </Nav>
            <Nav>
              Help
              <span>=</span>
            </Nav>
            <Nav>
              Help
              <span>=</span>
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

  span{
    margin-left: 10px;
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