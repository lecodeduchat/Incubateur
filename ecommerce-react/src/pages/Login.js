import React, {useState} from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {

  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Mot de pass');
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <div>
      <Header />
      <h3 className="">Connexion client</h3>
      <form onSubmit={onSubmit} className="form-content">
        <input 
          type="email" 
          name="email" 
          className="form-control" 
          value={email} 
          onChange={e=>setEmail(e.target.value)}
        />
        <input 
          type="password" 
          name="password"
          className="form-control"
          value={password}
          onChange={e=>setPassword(e.target.value)} 
        />
        <button type="submit" className="uppercase form-control form-btn-control">se connecter</button>
      </form>
      <button className="uppercase form-control form-btn-control btn-create-account">créer un compte</button>
      <a href="/" className="link">Réinitialiser votre mot de passe</a>
      <h3>Continuer en tant qu'invité</h3>
      <NavLink to="/checkout" />
        <span className="btn-link">CONTINUER</span>
      <NavLink />
      <Footer />
    </div>
  );
};

export default Login;
