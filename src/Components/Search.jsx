import React from 'react'
import styled from 'styled-components'
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
        <SerachHold>
            <input placeholder="Search by name or brand" />
            <button>
            <BiSearch />
            </button>
        </SerachHold>
  )
}

export default Search;

const SerachHold = styled.div`
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
`