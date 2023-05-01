import React from "react";
import styled from "styled-components";
import Dashboard from "../SigmUpAndSignIn/Dashboard";
import Adheader from "./Adheader";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adsettings from "./Adsettings";
import Adpersonal from "./Adpersonal";
import Adpasswordchange from "./Adpasswordchange";
import Adcustomer from "./Adcustomer";
import Adorder from "./Adorder";
import Aditems from "./Aditems";
import Adorderhistory from "./Adorderhistory";
import Merchantrequest from "./Merchantrequest";

const Adpage = () => {
  return (
    <Container>
      <Side>
        <Sidenav />
      </Side>
      <Main>
        <Adheader />
        <Merchantrequest />
        <Adorder />
        <Aditems />
        <Adcustomer />
        <Adorderhistory />
        <Adsettings />
        <Adpersonal />
        <Adpasswordchange />
      </Main>
    </Container>
  );
};

export default Adpage;
// const Container = styled.div``
const Container = styled.div`
  width: 100%;
  background-color: #e8e2e2;
  display: flex;
`;
const Side = styled.div`
  width: 230px;
  height: 100vh;
  background-color: #f262aa;
  border-top-right-radius: 20px;
  position: fixed;
  @media (max-width: 768px) {
    width: 90px;
  }
  /* position: fixed; */
`;
const Main = styled.div`
  width: calc(100% - 230px);
  display: flex;
  @media (max-width: 768px) {
    width: calc(100% - 90px);
  }
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  /* padding-right: 100px; */
  position: absolute;
  right: 0px;
  /* min-height: calc(100vh - 60px); */
  display: flex;
  justify-content: center;
`;
