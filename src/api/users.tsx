import { useQuery } from "react-query";
enum UsersType {
  KIDS = "kids",
  ADULTS = "adults",
  SENIORS = "seniors",
}

const getUserByType = async (params: { type: UsersType }) => {
  const res = await fetch(`/api/users/${params.type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

const getAllUsers = async () => {
  return Promise.all([
    getUserByType({ type: UsersType.KIDS }),
    getUserByType({ type: UsersType.ADULTS }),
    getUserByType({ type: UsersType.SENIORS }),
  ]).then((data) => {
    const [{ data: kids }, { data: adults }, seniors] = data;

    return [...kids, ...adults, ...seniors];
  });
};

export const useGetAllUsers = () => {
  return useQuery("getAllUsers", getAllUsers);
};
