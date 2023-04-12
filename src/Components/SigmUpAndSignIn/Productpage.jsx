import React from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const Productpage = () => {
  return (
    <Container>
      <Wrapper>
        <Buttom>
          <Head>
            <Th>
              <HoldHead>Product </HoldHead>
            </Th>
            <Th>
              <HoldHead>Tag </HoldHead>
            </Th>
            <Th>
              <HoldHead>Created</HoldHead>
            </Th>
            <Th>
              <HoldHead>Aval / Qty </HoldHead>
            </Th>
            <Th>
              <HoldHead>Active </HoldHead>
            </Th>

            <Th>
              <HoldHead>Action </HoldHead>{" "}
            </Th>
          </Head>
          <Body>
            <Td>
              <UserHold>
                <span>
                  <Image />
                </span>
                Palazzo jean S/M
              </UserHold>
            </Td>
            <Td>
              {" "}
              <HoldHead>101</HoldHead>
            </Td>

            <Td>
              {" "}
              <HoldHead>18 Nov 2020 </HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>0 / 0 </HoldHead>
            </Td>
            <Td>
              {" "}
              <HoldHead>toogle</HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>
                {" "}
                <Hold>
                  <NavLink to="/editExpense" style={{ textDecoration: "none" }}>
                    <Button bd="fff" cl="ff">
                      <span>
                        <FaRegEdit />
                      </span>
                      Edit
                    </Button>
                  </NavLink>
                  {/* <Button bd="ff" cl="">
                  <span>
                    <BsTrash />
                  </span>
                  Delete
                </Button> */}
                </Hold>
              </HoldHead>
            </Td>
          </Body>
          <Body>
            <Td>
              <UserHold>
                <span>
                  <Image />
                </span>
                Palazzo jean S/M
              </UserHold>
            </Td>
            <Td>
              {" "}
              <HoldHead>101</HoldHead>
            </Td>

            <Td>
              {" "}
              <HoldHead>18 Nov 2020 </HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>0 / 0 </HoldHead>
            </Td>
            <Td>
              {" "}
              <HoldHead>toogle</HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>
                {" "}
                <Hold>
                  <NavLink to="/editExpense" style={{ textDecoration: "none" }}>
                    <Button bd="fff" cl="ff">
                      <span>
                        <FaRegEdit />
                      </span>
                      Edit
                    </Button>
                  </NavLink>
                  {/* <Button bd="ff" cl="">
                  <span>
                    <BsTrash />
                  </span>
                  Delete
                </Button> */}
                </Hold>
              </HoldHead>
            </Td>
          </Body>
          <Body>
            <Td>
              <UserHold>
                <span>
                  <Image />
                </span>
                Palazzo jean S/M
              </UserHold>
            </Td>
            <Td>
              {" "}
              <HoldHead>101</HoldHead>
            </Td>

            <Td>
              {" "}
              <HoldHead>18 Nov 2020 </HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>0 / 0 </HoldHead>
            </Td>
            <Td>
              {" "}
              <HoldHead>toogle</HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>
                {" "}
                <Hold>
                  <NavLink to="/editExpense" style={{ textDecoration: "none" }}>
                    <Button bd="fff" cl="ff">
                      <span>
                        <FaRegEdit />
                      </span>
                      Edit
                    </Button>
                  </NavLink>
                  {/* <Button bd="ff" cl="">
                  <span>
                    <BsTrash />
                  </span>
                  Delete
                </Button> */}
                </Hold>
              </HoldHead>
            </Td>
          </Body>
          <Body>
            <Td>
              <UserHold>
                <span>
                  <Image />
                </span>
                Palazzo jean S/M
              </UserHold>
            </Td>
            <Td>
              {" "}
              <HoldHead>101</HoldHead>
            </Td>

            <Td>
              {" "}
              <HoldHead>18 Nov 2020 </HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>0 / 0 </HoldHead>
            </Td>
            <Td>
              {" "}
              <HoldHead>toogle</HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>
                {" "}
                <Hold>
                  <NavLink to="/editExpense" style={{ textDecoration: "none" }}>
                    <Button bd="fff" cl="ff">
                      <span>
                        <FaRegEdit />
                      </span>
                      Edit
                    </Button>
                  </NavLink>
                  {/* <Button bd="ff" cl="">
                  <span>
                    <BsTrash />
                  </span>
                  Delete
                </Button> */}
                </Hold>
              </HoldHead>
            </Td>
          </Body>
          <Body>
            <Td>
              <UserHold>
                <span>
                  <Image />
                </span>
                Palazzo jean S/M
              </UserHold>
            </Td>
            <Td>
              {" "}
              <HoldHead>101</HoldHead>
            </Td>

            <Td>
              {" "}
              <HoldHead>18 Nov 2020 </HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>0 / 0 </HoldHead>
            </Td>
            <Td>
              {" "}
              <HoldHead>toogle</HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>
                {" "}
                <Hold>
                  <NavLink to="/editExpense" style={{ textDecoration: "none" }}>
                    <Button bd="fff" cl="ff">
                      <span>
                        <FaRegEdit />
                      </span>
                      Edit
                    </Button>
                  </NavLink>
                  {/* <Button bd="ff" cl="">
                  <span>
                    <BsTrash />
                  </span>
                  Delete
                </Button> */}
                </Hold>
              </HoldHead>
            </Td>
          </Body>
          <Body>
            <Td>
              <UserHold>
                <span>
                  <Image />
                </span>
                Palazzo jean S/M
              </UserHold>
            </Td>
            <Td>
              {" "}
              <HoldHead>101</HoldHead>
            </Td>

            <Td>
              {" "}
              <HoldHead>18 Nov 2020 </HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>0 / 0 </HoldHead>
            </Td>
            <Td>
              {" "}
              <HoldHead>toogle</HoldHead>{" "}
            </Td>
            <Td>
              <HoldHead>
                {" "}
                <Hold>
                  <NavLink to="/editExpense" style={{ textDecoration: "none" }}>
                    <Button bd="fff" cl="ff">
                      <span>
                        <FaRegEdit />
                      </span>
                      Edit
                    </Button>
                  </NavLink>
                  {/* <Button bd="ff" cl="">
                  <span>
                    <BsTrash />
                  </span>
                  Delete
                </Button> */}
                </Hold>
              </HoldHead>
            </Td>
          </Body>
        </Buttom>
      </Wrapper>
    </Container>
  );
};

export default Productpage;

const Wrapper = styled.div`
  width: 95%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;
const Container = styled.div`
  width: 100%;
  /* overflow-x: scroll; */
  /* scroll-behavior: smooth; */
  /* scroll-snap-type: x mandatory; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
`;
const Button = styled.button`
  padding: 7px 20px;
  background-color: #ece5e5;
  border: ${({ bd }) => (bd ? "1px solid gray" : "0px")};
  border-radius: 5px;
  margin: 5px;
  color: ${({ cl }) => (cl ? "#109f10" : "red")};
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;
const Hold = styled.div``;
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
  border-left: 1.5px solid #d0d1d2;
`;
const Th = styled.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`;
const Head = styled.tr`
  border-bottom: 1px solid lightgray;
`;
const Body = styled.tr`
  border-bottom: 1px solid lightgray;
  :hover {
    background-color: lightgray;
  }
`;
const Buttom = styled.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`;
