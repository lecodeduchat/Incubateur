import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userService } from "@/_services";

const UserEdit = () => {
  const [user, setUser] = useState([]);
  const flag = useRef(false);
  let navigate = useNavigate();
  // let params = useParams();
  // On déstructure params pour récupérer uid
  const { uid } = useParams();

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    userService
      .updateUser(user)
      .then((res) => navigate("/admin/user/index", { replace: true }))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (flag.current === false) {
      userService
        .getUser(uid)
        .then((res) => {
          console.log("Affiche dataUser", res.data);
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => (flag.current = true);
    // On ajoute la ligne suivante pour éviter un warning dans la console généré par le linter (eslint)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="UserEdit">
      User Edit
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
          <button>Mettre à jour</button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
