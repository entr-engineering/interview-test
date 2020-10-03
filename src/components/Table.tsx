import React from "react";
import styled from "styled-components";
import {
  useTable,
  useSortBy,
  useAsyncDebounce,
  useGlobalFilter,
  useFilters,
} from "react-table";

const TableWrapper = styled.table`
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  width: 600px;
  border-radius: 1em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  background-color: white;
`;
const TableHeaderRow = styled.tr`
  text-align: left;
  font-weight: bold;
`;

const TableHead = styled.th`
  padding: 1em;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

const TableDefinition = styled.td`
  padding: 1em 1em;
`;

const InputWrapper = styled.td`
  display: flex;
  padding: 20px;
`;
const InputSearch = styled.input`
  border: none;
  width: 90%;
  padding: 10px;
  color: grey;

  border-radius: 10px;
  border: 1px solid var(--grey);
  outline: none;
`;

function GlobalFilter({ globalFilter, setGlobalFilter }: any) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <InputWrapper rowSpan={4}>
      <InputSearch
        value={value}
        type="text"
        aria-label="min"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search ..`}
      />
    </InputWrapper>
  );
}

export default function TableComponent({ columns, data, initialState }: any) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,

    prepareRow,
    //@ts-ignore typescript definition are missing this function
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <TableWrapper>
      <GlobalFilter
        //@ts-ignore typescript definition are missing this property
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <TableHead
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
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
      </table>
    </TableWrapper>
  );
}
