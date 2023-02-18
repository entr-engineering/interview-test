import React, { useCallback } from "react";
import styled from "styled-components";
import { useFilterAndSortParams } from "../hooks"

const StyledInputContainer = styled.div`
  border: 2px solid #F4F6F8;
  border-radius: 10px;
  &:invalid {
    border: 1px solid red;
  }
`

const StyledInput = styled.input`
  border: 0;
  width: 100%;
  height: 32px;
  &:focus {
    outline: none;
  }
`

export const SearchBox = () => {
  const { nameSearch, setNameSearch } = useFilterAndSortParams();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setNameSearch(e.target.name.value)
  }, [setNameSearch])

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputContainer>
      <StyledInput 
        type='text' 
        name='name'
        defaultValue={nameSearch}
        placeholder="Search by name"
      />
    </StyledInputContainer>
    </form>
  )
}