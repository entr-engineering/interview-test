import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  width: 240px;
  padding: 20px;
  margin-right: 20px;
  border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  justify-content: center;
  background-color: white;
`;

const InputWrapper = styled.div`
  display: flex;
  background-color: white;
  max-width: 200px;
  border: 1px solid #F5F6F8;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
const InputLabel = styled.label`
  font-size: 1rem;
  color: grey;
  padding-right: 10px;
`;
const Input = styled.input`
  border: none;
  max-width: 90%;
  outline: none;
`;

const Button = styled.button`
  background: var(--green);
  border-radius: 10px;
  padding: 4px;
  color: white;
  width: 80px;
  font-weight: bold;

    align-self: flex-start;
`;

const NumberRangeColumnFilter = ({
  min = 0,
  max = 100,
  onFilterChange,
}: any) => {
  const [filter, setFilter] = React.useState({ min, max });

  return (
    <Wrapper>
      <InputWrapper>
        <InputLabel htmlFor="min">Min</InputLabel>
        <Input
          value={filter.min}
          type="number"
          aria-label="min"
          onChange={(e) => {
            const val = e.target.value;
            setFilter((prev) => ({ min: Number(val), max: Number(prev.max) }));
          }}
          placeholder={`Min (${min})`}
        />
      </InputWrapper>

      <InputWrapper>
        <InputLabel htmlFor="min">Max</InputLabel>

        <Input
          value={filter.max}
          type="number"
          onChange={(e) => {
            const val = e.target.value;
            setFilter((prev) => ({ max: Number(val), min: Number(prev.min) }));
          }}
          placeholder={`Max (${max})`}
        />
      </InputWrapper>
      <Button onClick={() => onFilterChange(filter)}> Submit</Button>
    </Wrapper>
  );
};

export default NumberRangeColumnFilter;
