import React from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import Detaildown from "../Detail/Detaildown";
import Feature from "./Feature";

const Featured = () => {
  return (
    <Container>
      <Feature />
      <Wrapper>
        <Downtitle>Mobiles</Downtitle>
        <Cardhold>
          <Card>
            <Image>
              <img src="/Frame 1.png" />
            </Image>
            <Name>
              {" "}
              Iphone X
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#140,000</Price>
          </Card>
          <Card>
            <Image>
              <img src="/Frame 113.png" />
            </Image>
            <Name>
              {" "}
              Mac Book Pro
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#450,000</Price>
          </Card>
          <Card>
            <Image>
              <img src="/Airpod1.png" />
            </Image>
            <Name>
              {" "}
              Samsung S4
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#250,000</Price>
          </Card>
        </Cardhold>
        <Button>
          <button>See All</button>
        </Button>
      </Wrapper>
      <Wrapper>
        <Downtitle>Home Appliances</Downtitle>
        <Cardhold>
          <Card>
            <Image>
              <img src="/blender 1.png" />
            </Image>
            <Name>
              {" "}
              Iphone X
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#140,000</Price>
          </Card>
          <Card>
            <Image>
              <img src="/FAN 2.png" />
            </Image>
            <Name>
              {" "}
              Mac Book Pro
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#450,000</Price>
          </Card>
          <Card>
            <Image>
              <img src="/dryer 1.png" />
            </Image>
            <Name>
              {" "}
              Samsung S4
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#250,000</Price>
          </Card>
        </Cardhold>
        <Button>
          <button>See All</button>
        </Button>
      </Wrapper>
      <Wrapper>
        <Downtitle>Accessories</Downtitle>
        <Cardhold>
          <Card>
            <Image>
              <img src="/tv 4 1.png" />
            </Image>
            <Name>
              {" "}
              Iphone X
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#140,000</Price>
          </Card>
          <Card>
            <Image>
              <img src="/Frame 2.png" />
            </Image>
            <Name>
              {" "}
              Mac Book Pro
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#450,000</Price>
          </Card>
          <Card>
            <Image>
              <img src="/Frame 112.png" />
            </Image>
            <Name>
              {" "}
              Samsung S4
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#250,000</Price>
          </Card>
        </Cardhold>
        <Button>
          <button>See All</button>
        </Button>
      </Wrapper>
      <Wrapper>
        <Downtitle>Foodstuffs</Downtitle>
        <Cardhold>
          <Card>
            <Image>
              <img src="../Frame 115.png" />
            </Image>
            <Name>
              {" "}
              Iphone X
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#140,000</Price>
          </Card>
          <Card>
            <Image>
              <img src="/semo 2 2.png" />
            </Image>
            <Name>
              {" "}
              Mac Book Pro
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#450,000</Price>
          </Card>
          <Card>
            <Image>
              <img src="/pepsi 1.png" />
            </Image>
            <Name>
              {" "}
              Samsung S4
              <span>
                {" "}
                <BsCart />
              </span>
            </Name>
            <Price>#250,000</Price>
          </Card>
        </Cardhold>
        <Button>
          <button>See All</button>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Featured;
const Button = styled.div`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    width: 9%;
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 0;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`;
const Downtitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`;
const Image = styled.div`
  background-color: #cdc8c8;
  border-radius: 5px;
  width: 220px;
  height: 260px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
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
  }
`;
const Price = styled.div`
  font-size: 13px;
  font-weight: 500;
`;
const Cardhold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 280px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 5px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
