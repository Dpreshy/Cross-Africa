import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import styled from 'styled-components';
import { getAllProduct } from './Api/ProductApi';
import { NavLink } from 'react-router-dom';

const Search = () => {

  const { data } = useQuery({
    queryKey: [ "products" ],
    queryFn: getAllProduct
    
  })
  const [ currentPage, setCurrentPage ] = useState(0)

  const recordPage = 20
  const lastIndex = currentPage * recordPage
  const currentPageData = data?.slice(lastIndex, lastIndex + recordPage)
  const [ query, setQuery ] = useState()
  console.log(query)
  const keys = ["name", "brand","category"]

    
  const search = (e) => {
    const result = e?.filter((item) =>
   keys.some((key) => {
      const value = item[key];
      return typeof value === "string" && value.toLowerCase().includes(query);
    })
  );
  return query ? (result?.length ? result : null) : e
  }
  const searchData = search(currentPageData)
  console.log(searchData)
  return (
    <>
       <SearchHold>
          <input
              placeholder="Search by name or brand"
              value={ query }
              onChange={e=> setQuery(e.target.value)}
          />
            <button onClick={search}>
            <BiSearch />
            </button>
      </SearchHold>
      <div>
      {
        searchData?.map((props, index) => {
          <Div key={props._id}>
            <Navs to={ `hr` }>Hello</Navs>
          </Div>
        })
      }
      </div>
    </>
  )
}

export default Search;

const Navs = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid lightgray;
  margin: 10px 0px;

  :hover{
    color: #d975c0;
  }
`
const Div = styled.div`
  width: 400px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;

  overflow-y: auto;
`
const SearchHold = styled.div`
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
  /* @media (max-width:768px) {
    display: none;
  } */
`;