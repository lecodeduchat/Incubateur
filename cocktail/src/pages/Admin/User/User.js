import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { userService } from "@/_services";

const User = () => {
  // let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  //   Création d'une référence pour savoir si le composant est monté ou pas
  //   Permet d'éviter le double appel à l'API
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      console.log("test");
      userService
        .getAllUsers()
        .then((res) => {
          console.log("Affiche dataUsers", res);
          setUsers(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => (flag.current = true);
  }, []);

  const deleteUser = (userId) => {
    console.log(userId);
    userService
      .deleteUser(userId)
      .then((res) => {
        console.log(res);
        setUsers((current) => current.filter((user) => user.id !== userId));
      })
      .catch((err) => console.log(err));
  };

  //   const marcel = (userId) => {
  //     console.log("click");
  //     // modifier l'historique de navigation, on remplace la page actuelle par la page edit avec replace: true
  //     // navigate(`../edit/${userId}`, { replace: true });
  //     navigate(`../edit/${userId}`);
  //   };

  return (
    <div className="User">
      User liste
      {/* <button onClick={marcel}>User 1</button> */}
      {/* <button onClick={(e) => marcel(e)}>User 4</button> */}
      {/* <button onClick={() => marcel(4)}>User 4</button> */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>
                  <span
                    className="delete-user-btn"
                    onClick={() => deleteUser(user.id)}
                  >
                    X
                  </span>
                </td>
                <td>
                  <Link to={`/admin/user/edit/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.email}</td>
                <td>actions</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
