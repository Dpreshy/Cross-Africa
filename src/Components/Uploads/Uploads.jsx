import React from "react";
import { BiFridge } from "react-icons/bi";
import { FaMobileAlt, FaShirtsinbulk, FaVest } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Uniheader from "../SigmUpAndSignIn/Uniheader";

const Uploads = () => {
  return (
    <Container>
      <Uniheader />
      <Wrap>
        <Cont>
          <FaMobileAlt color="#242324" fontSize="120px" />
          <Link to="/upload" style={{ textDecoration: "none", color: "black" }}>
            <span>Mobiles</span>
          </Link>
        </Cont>
        <Cont>
          <FaVest color="#13283c" fontSize="120px" />
          <span>clothings</span>
        </Cont>
      </Wrap>
    </Container>
  );
};

export default Uploads;
// const Container = styled.div``
// const Container = styled.div``

const Cont = styled.div`
  width: 360px;
  height: 365px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background-color: #f7f5f1;
  justify-content: center;
  @media (max-width: 320px) {
    width: 300px;
  }
  flex-direction: column;
  margin: 20px 20px;
  span {
    font-size: 19px;
    font-weight: 500;
    margin-top: 15px;
  }
`;
const Wrap = styled.div`
  width: 87%;
  border-top: 1.8px solid grey;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
