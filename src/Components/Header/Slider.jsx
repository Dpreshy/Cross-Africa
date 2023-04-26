import React from 'react'
import styled from 'styled-components'

const Slider = ({ myRef }) => {
    const user = JSON.parse(localStorage.getItem("user"));
  return (
      <div>
          <Menu ref={myRef}>
                <Navs>Electronics</Navs>
                <Navs>Mobile Phones</Navs>
                <Navs>Clothing & Fashion</Navs>
                <Navs>Food & Groceries</Navs>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
             { user ? (<>
                   {/* <Navs>Profile</Navs> */}
                  <Navs>Log Out</Navs>
                  </>) : (<>
                    <Navs>Create Account</Navs>
                <Navs>Create Seller</Navs>
                    </>)}
              </Menu>
    </div>
  )
}

export default Slider;

const Menu = styled.div`
  width: 250px;
  height: 100vh;
  background-color: white;
  /* background-color: gold; */
  border-radius: 5px;

  position: fixed;
  top: 0px;
  /* left: 150px; */
  left: -1000px;
  z-index: 1;
  transition: all 350ms ease-in-out;
`;
const Navs = styled.div`
  width: 95%;
  line-height: 4;
  padding-left: 10px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  font-weight: 700;
  transition: all 350ms ease-in-out;
  :hover {
    background-color: lightgray;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
`;