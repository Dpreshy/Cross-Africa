import React, { useState } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  AiFillCaretDown,
} from "react-icons/ai";
import "../../../App.css"

const OrderPage = ({ avatar, index, order_No, price, created, delivery_status, payment_method,tag_No, name,payment_status,quantity,amount,country,address }) => {
  const [ edit, setEdit ] = useState(false);
  console.log(edit)
  return (
          <Body key={index} >
            {tag_No && <Td>
              {" "}
        <HoldHead>{ tag_No}</HoldHead>{" "}
            </Td>}
            {order_No && <Td style={{backgroundColor: "gold"}}>
              {" "}
        <HoldHead>{order_No }</HoldHead>
            </Td>}
            {country && <Td>
              {" "}
        <HoldHead>{country }</HoldHead>
            </Td>}
            
            {avatar && <Td>
              <UserHold>
                <span>
            <Image src={ avatar} />
                </span>
               {name}
              </UserHold>
            </Td>}
            {name && <Td>
              <UserHold>
                <span>
            <Img>DY</Img>
                </span>
               {name}
              </UserHold>
            </Td>}
            
            {quantity && <Td>
        <HoldHead>{ quantity}</HoldHead>{" "}
      </Td> }
      {delivery_status &&  <Td>
        <HoldHead className={`${delivery_status}`}>{ delivery_status}</HoldHead>
            </Td>}
      { payment_method && <Td>
        <HoldHead>{ payment_method }</HoldHead>
      </Td> }
      { amount && <Td>
        <HoldHead>{ amount }</HoldHead>
      </Td> }
      { payment_status && <Td>
        <HoldHead>{ payment_status }</HoldHead>
      </Td> }
      {address && <Td>
              {" "}
        <HoldHead>{ address}</HoldHead>{" "}
            </Td>}
      {created && <Td>
              {" "}
        <HoldHead>{ created}</HoldHead>{" "}
            </Td>}
          
            {total && <Td>
        <HoldHead>{ total}</HoldHead>{" "}
      </Td> }
      
           
          </Body>
  );
};

export default OrderPage;


const Img = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d1d0cb;
  margin-right: 10px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gold;
  margin-right: 10px;
`;
const Button = styled.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
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
const Body = styled.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;