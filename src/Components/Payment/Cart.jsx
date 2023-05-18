import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import {
  FaAmazonPay,
  FaAngleLeft,
  FaApplePay,
  FaCcPaypal,
  FaGooglePay,
} from "react-icons/fa";
import { AiFillAlipayCircle, AiOutlinePayCircle } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

  const [ QTY, setQTY ] = useState()
    const navigate = useNavigate()
    const check = JSON.parse(localStorage.getItem("user"))
  const cartData = useSelector((state) => state.reducers.cartItem)
  const totalPrice = cartData?.reduce((price, item)=> price + item.qty * item.price, 0)
  const change = () => {
    if (check) {
      if(totalPrice >= 50000){
        navigate("/checkout")
        // alert("he no work")
      }else{
        alert("You must have a total price of ₦50,000 to perform this action")
      }
    } else {
      navigate("/login-user")
    }
  }
  // console.log(totalPrice)
  var nf = Intl.NumberFormat()
  return (
    <div>
      <Container>
        <Wrapper>
        <Text>Shopping Cart</Text>
          <Scroll>
          <Buttom>
          <Head>
              
              <Th>
              <HoldHead>Item </HoldHead>
            </Th>
              <Th>
              <HoldHead>Price </HoldHead>
            </Th>
              <Th>
              <HoldHead>Quantity </HoldHead>
            </Th>
              <Th>
              <HoldHead>Total Price </HoldHead>
            </Th>
          </Head>
          {
            cartData?.map((props) => (
              <Body key={ props._id }>
                <Td>
              <UserHold>
                <span>
            <Image src={props?.avatar[0].url} />
                </span>
                {props?.name}
              </UserHold>
                </Td>
                <Td>
              {" "}
        <HoldHead>₦{nf.format(props.price) }</HoldHead>
            </Td>
                <Td>
              {" "}
        <HoldHead><div>{ props.qty}</div></HoldHead>
            </Td>
                <Td>
              {" "}
        <HoldHead>₦{nf.format(props.qty * props.price) }</HoldHead>
            </Td>
            </Body>
            ))
         }
          </Buttom>
          </Scroll>
          <Down>
            <Hold>
              <span>SUBTOTAL</span>
              <div>₦{nf.format(totalPrice) }</div>
                <Button onClick={change}> Checkout</Button>
              <Icon>
                <BsPaypal color="#0a223a" fontSize="40px" />
                <FaAmazonPay fontSize="40px" />
              </Icon>
            </Hold>
          </Down>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Cart;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: gold;
  margin-right: 10px;
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
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 400;
`;
const Body = styled.tr`
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  text-align: center;
`;
const HoldHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    font-size: 13px;
    font-weight: 500;
    border: 1.8px solid black;
    padding: 15px 20px;
  }
`;
const Th = styled.th`
  padding: 10px 15px;
  
  font-size: 18px;
  font-weight: 600;
`;
const Head = styled.tr`
`;
const Buttom = styled.table`
  width: 100%;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
`;
const Scroll = styled.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;
const Icon = styled.div`
  width: 130px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 12px 35px;
  border: 0;
  outline: none;
  background-color: #e8559e;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
const Hold = styled.div`
  width: 150px;
  margin-right: 34px;
  span {
    font-size: 18px;
    font-weight: 700;
  }

  div {
    font-size: 13px;
    font-weight: 500;
    margin: 8px 0;
  }
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 40px;
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1.9px solid grey;
  padding: 20px 0;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
