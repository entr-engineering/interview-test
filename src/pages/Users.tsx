import React from "react";
import Table from "../components/Table";
import NumberRangeFilter from "../components/NumberRangeFilter";
import styled from "styled-components";

import { useGetAllUsers } from "../api/users";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TableWrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  align-self: flex-start;
  margin-bottom: 10px;
`;

export default function Users() {
  const { data = [] } = useGetAllUsers();
  const [filteredRows, setFilteredRows] = React.useState(data);

  React.useEffect(() => {
    if (data.length) {
      setFilteredRows(data);
    }
  }, [data]);

  const onFilterChange = (filter: any) => {
    setFilteredRows(
      data.filter((r: any) => {
        return r.age > filter.min && r.age < filter.max;
      })
    );
  };

  const tableData = React.useMemo(() => filteredRows, [filteredRows]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name.firstName",
        Cell: function createdDate({ row }: any) {
          return (
            <span>
              {row.original.name?.firstName} {row.original.name?.lastName}
            </span>
          );
        },
      },
      {
        Header: "Age",
        accessor: "age",
      },
    ],
    []
  );
  return (
    <MainWrapper>
      <TitleWrapper>
        <Title>Users</Title>
        <TableWrapper>
          <NumberRangeFilter onFilterChange={onFilterChange} />
          <Table
            columns={columns}
            data={tableData}
            initialState={{
              sortBy: [
                {
                  id: "name.firstName",
                  asc: true,
                },
                {
                  id: "age",
                  desc: true,
                },
              ],
            }}
          />
        </TableWrapper>
      </TitleWrapper>
    </MainWrapper>
  );
}
