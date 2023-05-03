import React, { useState } from "react";
import styled from "styled-components";
import { BiPhone } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOneOrder } from "../Api/OrderApi";
import { useEffect } from "react";
import countryData from "../data"

const Adorderinfo = () => {
  const {id} = useParams()
    
    const {data} = useQuery({
      queryKey: ["order", id],
      queryFn: ()=>getOneOrder(id)
    })

    const [userCoubtry, setCountry] = useState({})
    const check = ()=>{
      setCountry(countryData?.find((el)=> el.name === data.country))
    }
    console.log(userCoubtry)
  
    useEffect(()=>{
      check()
    },[])
    
  return (
    
    <Container>
      <Wrapper>
        <Profile>
          <span>Profile Info</span>
        </Profile>
        <Tug>
          <Box>
            {" "}
            <Image>
              <img src="/Frame 113.png" />
              <span>{data.firstName + " " + data.lastName}</span>
              <div>{data.email}</div>
              <nav>{data.order_No}</nav>
            </Image>
          </Box>
          <Box>
            <Info>
              <Uptop>
                <Sales>Last Order</Sales>
                <Price>
                  3 days ago - <span>C000000</span>
                </Price>
              </Uptop>
              <Uptop>
                <Sales>Total Value order</Sales>
                <Price>₦ 300,000</Price>
              </Uptop>
              <Uptop>
                <Sales>All order info</Sales>
              </Uptop>

              <Uptop>
                <Sales>Registered</Sales>
                <Price>2 months ago</Price>
              </Uptop>
            </Info>
          </Box>
          <Box bd>
            <Info>
              <Uptop>
                <Sales>Address</Sales>
                <Price>{data.address}</Price>
              </Uptop>
              <Uptop>
                <Sales>Country</Sales>
                <Hold>
                  {/* <span>
                    {" "}
                    <BiPhone fontSize="18px" />
                  </span> */}
                  <Write><img src={userCoubtry.flag}/></Write>
                </Hold>
              </Uptop>
            </Info>
          </Box>
        </Tug>
      </Wrapper>
    </Container>
  );
};

export default Adorderinfo;
// const Container = styled.div``
const Price = styled.div`
  font-weight: 500;
  font-size: 13px;

  span {
    font-weight: 400;
  font-size: 14px;
    color: #68d0f3;
  }
`;
const Sales = styled.div`
  font-weight: 500;
  font-size: 14px;
`;
const Uptop = styled.div`
  margin: 10px 0;
`;
const Box = styled.div`
  width: 100%;
  text-align: center;
  height: 260px;
  border-right: ${({ bd }) => (bd ? "0px" : "1px solid gray")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  /* background-color: red; */
`;
const Profile = styled.div`
  padding: 10px 0;
  border-bottom: 1.9px solid grey;
  width: 100%;

  span {
    margin-left: 17px;
    font-weight: 500;
    font-size: 14px;
  }
`;
const Tug = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 20px; */
`;
const Write = styled.div`
  cursor: pointer;
  margin-bottom: 8px;

  img{
    width: 40px;
  }
`;
const Hold = styled.div`
  /* width: 200px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 13px;
  span {
    margin-right: 7px;
    padding: 5px 0;
  }
`;
const Info = styled.div`
width: 100%;
/* background-color: gold; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
  font-weight: 500;
  height: 200px;

  font-size: 14px;
  margin-left: 18px;
  margin-bottom: 18px;
  /* background-color: red; */

  /* margin-top: 23px; */
`;
const Text = styled.div`
  padding: 7px 0;
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  /* background-color: red; */

  padding: 20px 43px;
  /* border-right: 1.9px solid grey; */
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    padding: 0 10px;
  }
  div {
    font-size: 14px;
    font-weight: 500;
    color: #54c4ea;
  }

  nav {
    font-weight: 400;
    font-size: 13px;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  background-color: #f3f6f8;
`;
const Container = styled.div`
  width: 100%;
  /* background-color: gold; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
