import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import { accountService } from "@/_services/account.service";

const Login = () => {
  let navigate = useNavigate();

  // const [ login, setLogin ] = useState('');
  // const [ password, setPassword ] = useState('');
  //! Remarque: si on avait un long formulaire, on devrait créer un state pour chaque champ
  //! On peut utiliser un objet pour stocker les valeurs de chaque champ

  const [credentials, setCredentials] = useState({
    email: "yokotsuno@gmail.com",
    password: "bastet",
  });

  // Crée une méthode onChange qui va mettre à jour le state en fonction du champ
  // Cela évite de mettre dans le code html: onChange={(e) => setLogin(e.target.value)}
  const onChange = (e) => {
    setCredentials({
      // On récupère l'état précédent et on le fusionne avec le nouveau
      // Avant on utilisé prevState, maintenant on utilise le spread operator
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    accountService
      .login(credentials)
      .then((res) => {
        console.log(res.data.token);
        accountService.saveToken(res.data.token);
        navigate("/admin", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="group">
        <label htmlFor="email">Identifiant</label>
        <input
          type="text"
          name="email"
          value={credentials.email}
          onChange={onChange}
        />
      </div>
      <div className="group">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <div className="group">
        <button>Connexion</button>
      </div>
    </form>
  );
};

export default Login;
