import React from "react";
import Table from "../components/Table";
import { useGetAllUsers } from "../api/users";

export default function Users() {
  const { data = [] } = useGetAllUsers();
  const tableData = React.useMemo(() => data, [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
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
  return <Table columns={columns} data={tableData} />;
}
