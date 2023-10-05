import React, { useState } from "react";
import { userService } from "@/_services";
import { useNavigate } from "react-router-dom";

const UserAdd = () => {
  const [user, setUser] = useState([]);
  let navigate = useNavigate();

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // hasher le mot de passe avant de l'envoyer au serveur

    userService
      .addUser(user)
      .then((res) => {
        console.log(res.data);
        navigate("../index", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="UserAdd">
      User Add
      <form onSubmit={onSubmit}>
        <div className="group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={onChange}
          />
        </div>
        <div className="group">
          <button>Créer un utilisateur</button>
        </div>
      </form>
    </div>
  );
};

export default UserAdd;
