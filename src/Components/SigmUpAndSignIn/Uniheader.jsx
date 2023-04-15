import React from "react";
import styled from "styled-components";
import {
  AiFillBoxPlot,
  AiFillCaretDown,
  AiFillCompass,
  AiFillTags,
  AiOutlineCompass,
  AiOutlineTool,
  AiOutlineTransaction,
  AiOutlineUpload,
  AiTwotoneContainer,
} from "react-icons/ai";
const Uniheader = () => {
  return (
    <Container>
      <Wrap>
        <Up>
          <Hold>
            <span>
              <AiTwotoneContainer fontSize="25px" color="#9661cb" />
            </span>
            <Text>Product</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiFillTags fontSize="25px" color="brown" />
            </span>
            <Text>Orders</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiOutlineCompass fontSize="25px" color="#c05f3e" />
            </span>
            <Text>Completed</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiOutlineUpload fontSize="25px" color="#47390f" />
            </span>
            <Text>Upload Items</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiOutlineTransaction fontSize="25px" color="gray" />
            </span>
            <Text>Transactions</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiOutlineTool fontSize="25px" color="#123456" />
            </span>
            <Text>Settings</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
        </Up>
        {/* <Down>
          <Hold>
            <span>
              <AiOutlineUpload fontSize="25px" color="#47390f" />
            </span>
            <Text>Upload Items</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiOutlineTransaction fontSize="25px" color="gray" />
            </span>
            <Text>Transactions</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
          <Hold>
            <span>
              <AiOutlineTool fontSize="25px" color="#123456" />
            </span>
            <Text>Settings</Text>
            <span>
              <AiFillCaretDown />
            </span>
          </Hold>
        </Down> */}
      </Wrap>
    </Container>
  );
};

export default Uniheader;
// const Container = styled.div``
const Text = styled.div`
  font-size: 12px;
  font-weight: 700;
`;
const Hold = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 50px;
  padding: 0 20px;
  margin: 30px 100px;
  span {
    position: relative;
    bottom: -3px;
  }
  div {
    position: relative;
    bottom: -1px;
    cursor: pointer;
  }
  border: 1.8px solid #d975c0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;
const Down = styled.div`
  width: 95%;
  height: 75px;
  /* min-height: 100%; */
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  min-height: 150px;

  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Up = styled.div`
  width: 95%;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;
const Container = styled.div`
  width: 100%;
  /* height: 60px; */
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 20px; */
`;
