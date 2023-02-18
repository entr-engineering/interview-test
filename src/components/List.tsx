import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ResponseItem } from '../apiClient';
import { useFilterAndSortParams, useListAll } from "../hooks";
import { Box } from './Box';
import { SearchBox } from './SearchBox';
import {ReactComponent as SortArrow} from "./sort-arrows.svg"

const TableContainer = styled.div`
  height: 500px;
  overflow-y: auto;
`

const Table = styled.table`
  width: 100%;
`

const TableHeaderCellContent = ({label} : {label: 'Name' | 'Age'}) => {
  const {ageSort, nameSort, setAgeSort, setNameSort} = useFilterAndSortParams()

  const handleClick = useCallback(() => {
    label === 'Name'
    ? setNameSort(nameSort === 'asc' ? 'desc' : 'asc')
    : setAgeSort(ageSort === 'asc' ? 'desc' : 'asc')
  }, [label, ageSort, nameSort, setNameSort, setAgeSort])

  return (
    <div>
      {label}
      <SortArrow 
        style={{cursor: 'pointer'}} 
        onClick={handleClick}
      />
    </div>
  )

}

const TableHeader = () => {
  return (
    <thead>
      <tr style={{lineHeight: '32px'}}>
        <th>
          <TableHeaderCellContent label="Name" />
        </th>
        <th>
          <TableHeaderCellContent label="Age" />
        </th>
      </tr>
    </thead>
  )
}

const TableCell = styled.td`
  border-bottom: 1px solid gray;
`

const TableRow = ({item}: {item: ResponseItem}) => {
  return (
    <tr style={{lineHeight: '32px'}}>
      <TableCell>{`${item.name.firstName} ${item.name.lastName}`}</TableCell>
      <TableCell>{item.age}</TableCell>
    </tr>
  )
}

const generateRowKey = (item: ResponseItem) => {
  return `${item.name.firstName}${item.name.lastName}${item.age}`
}

export const List = () => {
  const { data } = useListAll()

  return (
    <Box>
      <SearchBox />
      <TableContainer>
        <Table>
          <TableHeader />
          <tbody>
            {
              data.map( item => (<TableRow key={generateRowKey(item)} item={item} />))
            }
          </tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}