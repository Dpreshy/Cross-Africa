import React from "react";
import styled from "styled-components";

const LandingPage = () => {
  return (
      <div>
          <Container>
              <Wrapper>
                  <Head>Buying & Selling made easy accross Africa!</Head>
                  <Holder>
                      <Card>
                          <TextHold>
                          <Title>Electronics.</Title>
                          <Content>
                            Buying made easy, get  TV, home theatre, system and electronics at the comfort of your home.
                          </Content>
                          <Button>Buy Now</Button>
                         </TextHold>
                      </Card>
                      <Card>
                          <TextHold>
                          <Title>Mobile Phones.</Title>
                          <Content>
                          Buying made easy, get used phones, laptops, chargers etc..  at the comfort of your home
                          </Content>
                          <Button>Buy Now</Button>
                         </TextHold>
                      </Card>
                      <Card>
                          <TextHold>
                          <Title>Clothing & Fashion.</Title>
                          <Content>
                          Buying made easy, get Trendy and classic wears at the comfort of your home.
                          </Content>
                          <Button>Buy Now</Button>
                         </TextHold>
                      </Card>
                      <Card>
                          <TextHold>
                          <Title>Food & Groceries.</Title>
                          <Content>
                          Buying made easy, food and groceries are all available, get them all at the comfort of your home.
                          </Content>
                          <Button>Buy Now</Button>
                         </TextHold>
                      </Card>
                  </Holder>
              </Wrapper>
          </Container>
    </div>
  )
}

export default LandingPage;

const Button = styled.button`
    margin-bottom: 20px;
    border: 0px;
    outline: none;
    background: #EE65CC;
    padding: 10px 30px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`
const Content = styled.div`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
`;
const Title = styled.div`
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 20px;
`
const TextHold = styled.div`
    /* background-color: gold; */
    margin-bottom: 20px;
`;
const Card = styled.div`
    width: 400px;
    height: 650px;
    color: white;
    padding: 0px 18px;
    background-color: #000000c5;
    margin: 10px;

    display: flex;
    align-items: flex-end;
    
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
`
const Wrapper = styled.div`
    width: 90%;
    margin-top: 30px;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`;