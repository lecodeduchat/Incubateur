import Axios from "./caller.service";

// Sans React Query, on travaille sur des données
// let getAllUsers = () => {
//   return Axios.get("/users");
// };

// Avec React Query, on travaille sur des promesses
let getAllUsers = async () => {
  const { data } = await Axios.get("/users");
  return data["hydra:member"];
};

let getUser = (uid) => {
  return Axios.get(`/users/${uid}`);
};

export const userService = {
  getAllUsers,
  getUser,
};
