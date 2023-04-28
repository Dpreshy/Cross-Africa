import React from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Feature = () => {
  return (
    <Container>
      <Wrapper>
        <Buttom>
          <Head>
            <Th>
              <HoldHead>Featured </HoldHead>
            </Th>
          </Head>

          <Body>
            <Td>
              <UserHold>
                <span>
                  <Image src="/pepsi 1.png" />
                </span>
              </UserHold>
            </Td>
            <Td>
              <UserHold>
                <span>
                  <Image src="/Frame 1.png" />
                </span>
              </UserHold>
            </Td>
            <Td>
              <UserHold>
                <span>
                  <Image src="/blender 1.png" />
                </span>
              </UserHold>
            </Td>
            <Td>
              <UserHold>
                <span>
                  <Image src="/tv 4 1.png" />
                </span>
              </UserHold>
            </Td>
            <Td>
              <UserHold>
                <span>
                  <Image src="/Frame 2.png" />
                </span>
              </UserHold>
            </Td>
            <Td>
              <UserHold>
                <span>
                  <Image src="../Frame 115.png" />
                </span>
              </UserHold>
            </Td>
          </Body>
        </Buttom>
      </Wrapper>
    </Container>
  );
};

export default Feature;

// const Wrapper = styled.div``
const Wrapper = styled.div`
  width: 93%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    /* display: none; */
  }
`;
const Container = styled.div`
  width: 100%;
  /* overflow-x: scroll; */
  /* scroll-behavior: smooth; */
  /* scroll-snap-type: x mandatory; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
const Image = styled.img`
  width: 220px;
  height: 170px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
`;

const HoldHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`;
const UserHold = styled.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`;
const Td = styled.td`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
`;
const Th = styled.th`
  padding: 10px 15px;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  // border: 1px solid black;
`;
const Head = styled.tr``;
const Body = styled.tr``;
const Buttom = styled.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #e3e0e0;

  /* overflow-x: scroll; */
`;
