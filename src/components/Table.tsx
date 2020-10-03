import React from "react";
import styled from "styled-components";
import { useTable, useSortBy} from "react-table";

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
const TableHeaderRow = styled.tr`
  background-color: #009879;
  color: white;
  text-align: left;
  font-weight: bold;
`;

const TableHead = styled.th`
  font-size: 1rem;
  padding: 10px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

const TableDefinition = styled.td`
  padding: 12px 15px;
`;

export default function TableComponent({ columns, data, initialState}: any) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    initialState
  },useSortBy);

  // Render the UI for your table
  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
               <TableHead {...column.getHeaderProps(column.getSortByToggleProps())}>
               {column.render('Header')}
               {/* Add a sort direction indicator */}
               <span>
                 {column.isSorted
                   ? column.isSortedDesc
                     ? ' 🔽'
                     : ' 🔼'
                   : ''}
               </span>
             </TableHead>

            ))}
          </TableHeaderRow>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any, i: any) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                return (
                  <TableDefinition {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableDefinition>
                );
              })}
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
}
