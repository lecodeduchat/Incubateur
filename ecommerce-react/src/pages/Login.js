import React, { useState } from "react";
import Header from "@/components/Header";
import { NavLink } from "react-router-dom";
import Footer from "@/components/Footer";
import { accountService } from "@/_services/account.service";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
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
    axios
      .post("https://localhost:8000/api/login_check", credentials)
      .then((res) => {
        console.log(res.data);
        accountService.saveToken(res.data.token);
        navigate("/caisse");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header />
      <h3 className="">Connexion client</h3>
      <form onSubmit={onSubmit} className="form-content">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          value={credentials.email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="form-control"
          value={credentials.password}
          onChange={onChange}
        />
        <button
          type="submit"
          className="uppercase form-control form-btn-control"
        >
          se connecter
        </button>
      </form>
      <button className="uppercase form-control form-btn-control btn-create-account">
        créer un compte
      </button>
      <a href="/" className="link">
        Réinitialiser votre mot de passe
      </a>
      <h3>Continuer en tant qu'invité</h3>
      <NavLink to="/checkout" />
      <span className="btn-link">CONTINUER</span>
      <NavLink />
      <Footer />
    </div>
  );
};

export default Login;
