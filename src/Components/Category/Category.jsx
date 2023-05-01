import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Image1 from "../Assets/pepsi 1.png"

const Category = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>Buying & Selling made easy accross Africa!</Head>
          <Holder>
            <Card img={Image1}>
              {/* <img src="/tv 4 1.png" /> */}

              <TextHold>
                <Title>Electronics.</Title>
                <Content>
                  Buying made easy, get TV, home theatre, system and electronics
                  at the comfort of your home.
                </Content>
                <Button to="/allitems">Buy Now</Button>
              </TextHold>
            </Card>
            <Card img={Image1}>
              {/* <img src="/Frame 2.png" /> [ "phone", "food and groceries", "clothing and fashion", "electronics" ]*/}

              <TextHold>
                <Title>Mobile Phones.</Title>
                <Content>
                  Buying made easy, get used phones, laptops, chargers etc.. at
                  the comfort of your home
                </Content>
                <Button to="/allitems">Buy Now</Button>
              </TextHold>
            </Card>
            <Card img={Image1}>
              {/* <img src="../Frame 115.png" /> */}

              <TextHold>
                <Title>Clothing & Fashion.</Title>
                <Content>
                  Buying made easy, get Trendy and classic wears at the comfort
                  of your home.
                </Content>
                <Button to="/allitems">Buy Now</Button>
              </TextHold>
            </Card>
            <Card img={Image1}>
              {/* <img src="/pepsi 1.png" /> */}

              <TextHold>
                <Title>Food & Groceries.</Title>
                <Content>
                  Buying made easy, food and groceries are all available, get
                  them all at the comfort of your home.
                </Content>
                <Button to="/allitems">Buy Now</Button>
              </TextHold>
            </Card>
          </Holder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Category;

const Button = styled(NavLink)`
  margin-bottom: 20px;
  border: 0px;
  outline: none;
  background: #ee65cc;
  padding: 10px 30px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
`;
const Content = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 20px;
`;
const TextHold = styled.div`
  /* background-color: gold; */
  margin-bottom: 20px;
  /* background-image: url(${props => props.img}); */
`;
const Card = styled.div`
  width: 400px;
  height: 650px;
  color: white;
  padding: 0px 18px;
  background-color: #201f1cd4;
  background-image: url(${({img}) => (img)});
  margin: 10px;

  display: flex;
  align-items: flex-end;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
  }
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Head = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 300px;
  /* color: ; */
`;
const Wrapper = styled.div`
  width: 90%;
  margin-top: 30px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`;
