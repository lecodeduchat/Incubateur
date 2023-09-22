import {useState} from 'react';

function App() {

  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  return (
    <form>
      {/* onCheck est une fonction call-back permettant de faire remonter les informations */}
      <CGUCheckbox checked={isTermsAccepted} onCheck={setIsTermsAccepted} />
      <br></br>
      <button disabled={!isTermsAccepted}>Valider le panier</button>
    </form>
  );
}

function CGUCheckbox({checked, onCheck}){
  return (
    <label>
      <input 
      type="checkbox" 
      onChange={(event) => onCheck(event.target.checked)}
      checked={checked} />
      J'accepte les CGU
    </label>
  );
}

export default App;
