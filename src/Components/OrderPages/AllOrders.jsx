import React,{useState} from 'react'
import Uniheader from '../SigmUpAndSignIn/Uniheader'
import styled  from 'styled-components'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { orders } from '../Api/OrderApi'
import moment from 'moment'
import { BiSearch } from "react-icons/bi";
import ReactPaginate from 'react-paginate'
import "../../App.css"
import OrderPage from './OrderPage'

const Products = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const queryCLient = useQueryClient()
  

  const userID = user._id
  const {data} = useQuery({
    queryKey: ["orders"],
    queryFn: orders
  })
  
  const [ currentPage, setCurrentPage ] = useState(0)
  const recordPage = 6
  const lastIndex = currentPage * recordPage
  const pageCount = Math.ceil(data?.length / recordPage)
  const currentPageData = data?.slice(lastIndex, lastIndex + recordPage)
  const changeCPage = ({selected}) => {
    setCurrentPage(selected)
  }
  console.log(data)


  var nf = Intl.NumberFormat()
  return (
      <Container>
      <Uniheader />
      <Wrapper>
      <Buttom>
          <Header>
            <Text>All Products</Text>
            <Search>
              <input placeholder="Search by name or brand" />
              <button>
                <BiSearch />
              </button>
            </Search>
          </Header>
          <Head>
            <Th>
              <HoldHead>Order Number </HoldHead>
            </Th>
            <Th>
              <HoldHead>Pending Days</HoldHead>
            </Th>
            <Th>
              <HoldHead>Order Date</HoldHead>
            </Th>
            <Th>
              <HoldHead>Price</HoldHead>
            </Th>
            <Th>
              <HoldHead>Payment Method</HoldHead>
            </Th>
            <Th>
              <HoldHead>Status </HoldHead>
            </Th>
        </Head>
        {
            currentPageData?.map((props,index) => (
              <OrderPage index={ index } key={ index }  delivery_status={ props.delivery_status } order_No={ props.order_No } created={ moment(props.createdAt).format("D MMM YYYY") } payment_method={ props.payment_method } pending_days={ props.pending_days } price={ nf.format(props.price)} />
            ))
      }
        </Buttom>
      </Wrapper>
      <ReactPaginate
        breakLabel="..."
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={ pageCount }
        onPageChange={ changeCPage }
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_link"}
        nextLinkClassName={"pagination_link"}
        disabledClassName={ "pagination_link_disable" }
        activeClassName={"pagination_link_active"}
        renderOnZeroPageCount={ null }
      />
      {/* <ButtonHold>
        <Button onClick={prePage}>Previous</Button>
        {
          numbers.map((n, i) => {
            <Div  className={`${currentPage === n ? "active" : ""}`} key={i}>
              <a href='#' onClick={()=>changeCPage(n)}>{n}</a>
            </Div>
          })
        }
        <Button onClick={nextPage}>Next</Button>
     </ButtonHold> */}
    </Container>
  )
}

export default Products

const Div = styled.div`
  width: 50px;

  
`
const Button = styled.button`
  padding: 10px 30px;
  background-color: white;
  border: 1px solid lightgray;
  margin: 10px;
  cursor: pointer;
`;
const ButtonHold = styled.div`
  .active{
    color: black
  }
`
const Wrapper = styled.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
const Search = styled.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`;
const Text = styled.div`
  border-bottom: 2px solid blue;
`;
// const Wrapper = styled.div``
const HoldHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`;
const Th = styled.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`;
const Head = styled.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`;
const Buttom = styled.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`;
