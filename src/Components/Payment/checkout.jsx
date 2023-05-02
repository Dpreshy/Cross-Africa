import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { AiFillCaretDown, AiFillFlag, AiFillCaretLeft } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import countryData from "../data"
import { useState } from "react";

const Checkout = () => {
  const navigate = useNavigate()
  var nf = Intl.NumberFormat()
  const [ selectCountry, setSelectCountry ] = useState(countryData)
  let [ findCountry, setFindCountry ] = useState(0)
  let [ checkState, setCheckState ] = useState(false)
  const [ email, setemail ] = useState(""); 
  const [ firstName, setfirstName ] = useState(""); 
  const [ country, setcountry ] = useState("");
  const [ lastName, setlastName ] = useState("");
  const [ address, setaddress ] = useState("");
  const [ apartment, setapartment ] = useState("");
  const [ state, setstate ] = useState("");
  const [ Localgovt, setLocalgovt ] = useState("");
  const [ nearestBusStop, setnearestBusStop ] = useState("");
  const [ phone_No, setphone_No ] = useState("");
  
  const cartData = useSelector((state) => state.reducers.cartItem)
  // console.log(cartData)
  const totalPrice = cartData?.reduce((price, item) => price + item.qty * item.price, 0)
  console.log(totalPrice)
  const changedState = () => {
    if (checkState === true) return setCheckState(() => checkState = false)
    setCheckState(() => checkState = true)
    
  }
  const returnCountry = () => {
    setFindCountry(() => findCountry + 1)
    if (findCountry >= selectCountry.length - 1) {
      setFindCountry(()=> findCountry = 0)
    }
  }

  const getCountryName = () => {
    setcountry(selectCountry[findCountry].name)
  }
  const create = useMutation({
    // mutationKey: ["seller"],
    mutationFn: personalInfo,
    onSuccess: (res) => {
        console.log(res);
        navigate("/auth/businessinfo")
    },

    onError: (error) => {
        console.log(error.message)
    }
  })
  useEffect(() => {
    getCountryName()
  },[findCountry])
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Hold>
              <InputHold>
                <Title>Contact Information</Title>
                <Text>Email</Text>
                <InputCont>
                  <Input placeholder="email"  value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
                  {/* <span>Chance</span> */}
                </InputCont>
              </InputHold>
              <InputHold>
                <Title>Payment Method</Title>
                <InputCont>
                  <Dis>
                    <Cont>
                      <Checkbox bg="fff"></Checkbox>
                      <PayOn>Pay on delivery</PayOn>
                    </Cont>
                    <Line />
                    <Cont>
                      <Checkbox bg=""></Checkbox>
                      <PayOn>Pay on delivery</PayOn>
                    </Cont>
                  </Dis>
                </InputCont>
              </InputHold>

              <InputHold1>
                <Title>Shipping Address</Title>
                <Text>Country</Text>

                <Optionav>
                  {" "}
                  <div>
                    <AiFillFlag />
                  </div>
                  <span>
                    <AiFillCaretDown />
                  </span>
                </Optionav>
              </InputHold1>
              <InputHold2>
                <Wrap>
                  <Text>First Name</Text>
                  <InputCont>
                    <Input placeholder="First Name"  value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap>
                <Wrap>
                  <Text>Last Name</Text>
                  <InputCont>
                    <Input placeholder="Last Name"  value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap>
              </InputHold2>
              <InputHold1>
                <Text>Address</Text>
                <InputCont>
                  <Input placeholder="Address"  value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
                  {/* <span>Chance</span> */}
                </InputCont>
              </InputHold1>
              <InputHold1>
                <Text>Apartment, Suite etc.... (Optional)</Text>
                <InputCont>
                  <Input placeholder="Apartment, Suite etc...."  value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
                  {/* <span>Chance</span> */}
                </InputCont>
              </InputHold1>
              <InputHold2>
                <Wrap1>
                  <Text>State</Text>
                  <InputCont>
                    <Input placeholder="Lagos"  value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap1>
                <Wrap1>
                  <Text>LGA</Text>
                  <InputCont>
                    <Input placeholder="Ajeromi"  value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap1>
                <Wrap1>
                  <Text>Nearest B/Stop</Text>
                  <InputCont>
                    <Input placeholder="OJA"  value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap1>
              </InputHold2>

              <InputHold1>
                <Text>Phone number</Text>
                <InputCont>
                  <Input placeholder="Phone number"  value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
                  {/* <span>Chance</span> */}
                </InputCont>
              </InputHold1>
              <Buttons>
                <Div>
                  <span>
                    <AiFillCaretLeft />
                  </span>
                  <div onClick={()=>{navigate(-1)}}>Return to Cart</div>
                </Div>
                <Button>Continue Shopping</Button>
              </Buttons>
            </Hold>
          </Left>
          <Right>
            {
              cartData?.map((props, index) => (
                <Item index={ index } name={ props.name } price={ nf.format(props.price) } shippingFee={ props?.shippingFee } totalPrice={ nf.format(totalPrice) } subtotal={nf.format(props.price * props.qty)} qty={ props.qty } id={ props._id} />
              ))
            }
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Checkout;
const Wrap = styled.div`
  width: 45%;
`;
const Wrap1 = styled.div`
  width: 30%;
`;
const Optionav = styled.div`
  font-weight: 700;
  width: 95%;
  padding: 10px 10px;
  display: flex;
  border: 1.7px solid grey;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  // background-color: gold;
  height: 30px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
    cursor: pointer;
  }
  div {
  }
`;
const Text = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
`;
const Right = styled.div`
  flex: 1;

  /* background-color: blue; */
`;
const Button = styled.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Div = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 30px;

  span {
    margin-top: 5px;
  }
`;
const Line = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;
const PayOn = styled.div`
  font-weight: 700;
  margin-right: 20px;
`;
const Checkbox = styled.div`
  border: 1px solid black;
  background-color: ${({ bg }) => (bg ? "#D975C0" : "transparent")};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`;
const Cont = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Dis = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  /* margin-right: 20px; */
`;
const InputCont = styled.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 14px;
`;
const InputHold = styled.div`
  margin-bottom: 50px;
`;
const InputHold1 = styled.div`
  margin-bottom: 20px;
`;
const InputHold2 = styled.div`
  margin-bottom: 20px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
const Hold = styled.form`
  width: 90%;
  margin-top: 20px;
`;
const Left = styled.div`
  flex: 1;
  border-right: 2px solid lightgray;
  display: flex;
  justify-content: center;
  /* background-color: gold; */
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
