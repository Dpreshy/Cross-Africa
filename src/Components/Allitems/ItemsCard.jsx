import React from "react"
import styled from "styled-components"
import { BsCart } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const ItemsCard = ({ id, index, name, price,img }) => {
    
    // console.log(id)
    return(
      <>
      <Card key={index}>
            <Image>
              <img src={img} />
            </Image>
            <Name>
              {" "}
              <Div to={`/detail/${id}`}>
                {name}
              </Div>
              <Div to="/cart">
                <span>
                  <BsCart />
                </span>
              </Div>
            </Name>
              <Price>₦{ price}</Price>
          </Card>
      </>
    )
}

export default ItemsCard

const Div = styled(NavLink)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`
const Image = styled.div`
  /* background-color: #cdc8c8; */
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 220px;
  height: 260px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  @media (max-width: 550px){
    width: 170px;
    height: 220px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 220px;
  }
  @media (max-width: 380px){
    width: 120px;
    height: 200px;
  }
  @media (max-width: 314px){
    width: 100px;
    height: 160px;
  }
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
`;
const Price = styled.div`
  font-size: 13px;
  font-weight: 500;
`;

const Card = styled.div`
  width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px;

  @media (max-width: 550px){
    width: 170px;
    height: 270px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 250px;
  }
  @media (max-width: 380px){
    width: 120px;
    height: 230px;
  }
  @media (max-width: 314px){
    width: 100px;
    height: 180px;
  }
`;
