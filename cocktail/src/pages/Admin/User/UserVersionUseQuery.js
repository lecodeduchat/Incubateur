import React from "react";
// import { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { userService } from "@/_services";

const User = () => {
  let navigate = useNavigate();
  // const [users, setUsers] = useState([]);
  //   Création d'une référence pour savoir si le composant est monté ou pas
  // Permet d'éviter le double appel à l'API
  // const flag = useRef(false);

  const { isLoading, data } = useQuery("users", () =>
    userService.getAllUsers()
  );
  const users = data || { data: [] };
  console.log(users);
  //   useEffect(() => {
  //     if (flag.current === false) {
  //       userService
  //         .getAllUsers()
  //         .then((res) => {
  //           console.log(res.data["hydra:member"]);
  //           setUsers(res.data["hydra:member"]);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //     return () => (flag.current = true);
  //   }, []);

  //   const marcel = (userId) => {
  //     console.log("click");
  //     // modifier l'historique de navigation, on remplace la page actuelle par la page edit avec replace: true
  //     // navigate(`../edit/${userId}`, { replace: true });
  //     navigate(`../edit/${userId}`);
  //   };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="User">
      User liste
      {/* <button onClick={marcel}>User 1</button> */}
      {/* <button onClick={(e) => marcel(e)}>User 4</button> */}
      {/* <button onClick={() => marcel(4)}>User 4</button> */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => navigate(`../edit/${user.id}`)}>
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
