import React from 'react'
import styled from 'styled-components'
import Adorder from './Adorder'
import Aditems from './Aditems'

const OrderDetail = () => {
  return (
    <div>
        <Container>
        <Adorder />
        <Aditems />
        </Container>
    </div>
  )
}

export default OrderDetail

const Container = styled.div``