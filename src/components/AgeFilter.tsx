import React, { useCallback, useMemo, useState } from 'react';
import styled from "styled-components"
import { useFilterAndSortParams } from '../hooks';
import { Box } from './Box';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
`

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

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  height: 32px;
  padding-left: 5px;
  font-size: medium;
`

const StyledSubmit = styled.input`
  border-radius: 5px;
  border-color: white;
  color: ${props => props.disabled ? `black` : `white` };
  background-color: ${props => props.disabled ? `#F4F6F8` : `#52A27E` };
  height: 50px;
  &:hover {
    cursor: ${props => props.disabled ? `inherit` : `pointer` };
  }

`

interface FormValues {
  minAge?: string;
  maxAge?: string;
}

export const AgeFilter = () => {
  const { minAge, maxAge, setMinAge, setMaxAge } = useFilterAndSortParams();
  const [formState, setFormState] = useState<FormValues>({minAge, maxAge});

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setMinAge(formState.minAge);
    setMaxAge(formState.maxAge)
  }, [formState.minAge, formState.maxAge, setMaxAge, setMinAge])

  const hasInvalidInput = useMemo(() => {
    return isNaN(Number(formState.maxAge || 0)) || isNaN(Number(formState.minAge || 0))
  }, [formState.minAge, formState.maxAge])

  return (
    <Box>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputContainer>
          <StyledLabel>Min
          <StyledInput 
            type="text"
            pattern="[0-9]+"
            name='minAge' 
            defaultValue={formState.minAge} 
            onChange={(e) => setFormState({...formState, minAge: e.target.value})}
          />
          </StyledLabel>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>
            Max
            <StyledInput 
              type="text"
              pattern="[0-9]+"
              name='maxAge' 
              defaultValue={formState.maxAge} 
              onChange={(e) => setFormState({...formState, maxAge: e.target.value})}
            />
          </StyledLabel>
        </StyledInputContainer>
        <StyledSubmit 
          type="submit" 
          value={hasInvalidInput ? 'Invalid input' : 'Retrieve users'}
          disabled={hasInvalidInput}
        />
      </StyledForm>
    </Box>
  )
}