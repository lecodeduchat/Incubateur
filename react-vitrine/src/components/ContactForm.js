import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {init} from '@emailjs/browser';
init(process.env.ID);

const ContactForm = () => {
    // Le hook useRef() permet de récupérer un objet DOM (ici le formulaire) et de le stocker dans une variable (ici form). On a ainsi accès aux valeurs des champs du formulaire.
  const form = useRef();
      
  const sendEmail = (e) => {
    e.preventDefault();
    const formMes = document.querySelector('.form-message');

    emailjs.sendForm(
    'service_ktedbvv', 
    'template_bkwu02r', 
    form.current, 
    // On cache l'ID du compte emailJS dans un fichier .env pour des raisons de sécurité
    process.env.REACT_APP_ID
    )
      .then((result) => {
          console.log(result.text);
          // On réinitialise le formulaire après l'envoi du message
          form.current.reset();
          formMes.innerHTML = "<p class='success'>Message envoyé !</p>";
          // On fait disparaître le message de succès après 2,5 secondes
          setTimeout(() => {
            formMes.innerHTML = "";
          }, 2500);
      }, (error) => {
          console.log(error.text);
          formMes.innerHTML = "<p class='error'>Une erreur s'est produite, veuillez réessayer.</p>";
          setTimeout(() => {
            formMes.innerHTML = "";
          }, 2500);
      });
  };

  return (
    <div className="form-container">
      <h2>contactez-nous</h2>
        <form ref={form} onSubmit={sendEmail} className='form-content'>
            <label>Nom</label>
            <input type="text" name="name" required autoComplete='off' id="name" />
            <label>Email</label>
            <input type="email" name="email" required autoComplete='off' id="email" />
            <label>Message</label>
            <textarea name="message" required id="mess"/>
            <input type="submit" value="Envoyer" className='hover button' />
        </form>
        <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;