import React, { useState } from "react";
import Detailmiddle from "./Detailmiddle";
import Detaildown from "./Detaildown";
import Detailup from "./Detailup";
import DetailProduct from "./DetailProduct";
import styled from "styled-components";
import { getSingleProduct } from "../Api/ProductApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Detail = () => {
  const {id} = useParams()

  const [cart, setCart] = useState([])
  const { data } = useQuery({
    queryKey: [ "products", id ],
    queryFn: ()=> getSingleProduct(id),
  })

  console.log(data)
  var nf = Intl.NumberFormat()

  const handleCart = (item) => {
    const check = cart.find((el)=> el._id === item._id)
    if (check) {
      setCart(cart.map((el) => el.id === item.id ? 
      {...check, qty: check.qty + 1}: item
      ))
    } else {
      setCart([...cart, {...item, qty: 1}])
    }
    console.log(item)

  }
  console.log(cart)

  return (
    <Container>
      <Wrapper>
        <Detailup name={ data?.name } price={ nf.format(data?.price) } />
        <Detailmiddle avatar={ data?.avatar } add={ handleCart } data={ data} />
        <Detaildown description={ data?.description} />
        <DetailProduct />
      </Wrapper>
    </Container>
  );
};

export default Detail;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
const Wrapper = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`;
