import Aside from "./components/Aside";
import { useFormik } from "formik";
import * as Yup from "yup";

// Création d'un chemin de validation avec Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Le nom est obligatoire"),
  email: Yup.string().email("L'email n'est pas valide").required("L'email est obligatoire"),
  phoneNumber: Yup.number().typeError("Veuillez entrer un numéro de téléphone valide").required("Le numéro de téléphone est obligatoire"),
  password: Yup.string().min(6, "Le mot de passe doit contenir au moins 6 caractères").required("Le mot de passe est obligatoire"),
  passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "Les mots de passe ne correspondent pas").required("La confirmation du mot de passe est obligatoire"),
  gcu: Yup.boolean().oneOf([true], "Vous devez accepter les conditions d'utilisation").required("Vous devez accepter les conditions d'utilisation"),
});

function App() {
  // Le noms des variables correspondent aux attributs name des inputs
  // Cela permet de lier les valeurs des inputs aux valeurs du state
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
    gcu: false,
  };

  function registerUser(formValues) {
    console.log("Valeurs du formulaire",formValues);
  }

  // La fonction validate est remplacée par validationSchema de Yup
  function validate(formValues) {
    const errors = {};
    if(formValues.name === "") {
      errors.name = "Le nom est obligatoire";
    }
    if(formValues.email === "") {
      errors.email = "L'email est obligatoire";
    }else if(! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)){
      errors.email = "L'email n'est pas valide";
    }
    if(formValues.phoneNumber === "") {
      errors.phoneNumber = "Le numéro de téléphone est obligatoire";
    }else if(! /^[0-9]+$/.test(formValues.phoneNumber)){
      errors.phoneNumber = "Le numéro de téléphone n'est pas valide";
    }
    if(formValues.password === "") {
      errors.password = "Le mot de passe est obligatoire";
    }else if(formValues.password.length < 6){
      errors.password = "Le mot de passe doit contenir au moins 6 caractères";
    }
    if(formValues.passwordConfirmation !== formValues.password) {
      errors.passwordConfirmation = "Les mots de passe ne correspondent pas";
    }
    if(!formValues.gcu) {
      errors.gcu = "Vous devez accepter les conditions d'utilisation";
    }
    return errors;
  }

  // Ici on utilise la méthode useFormik de formik mais on peut aussi utiliser Formik
  // Voir dans le projet react-formik-2
  const formik = useFormik({
    initialValues,
    // Pour soumettre le formulaire on utilise onSubmit
    onSubmit: registerUser,
    // validate, on remplace par validationSchema
    validationSchema,
  });

  console.log(formik.values);
  console.log(formik.errors);

  // Il déstructure les valeurs de formik pour ne plus avoir à écrire name, email, etc.
  const { name, email, phoneNumber, password, passwordConfirmation, gcu } = formik.values;
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-lg-5 bg-blue">
          <Aside/>
        </div>
        <div className="col-lg-7">
          <div className="row form-container">
            <div className="col-md-12 col-lg-7 mx-auto">
              <h1>Inscription</h1>
                    {/* Pour soumettre le formulaire on utilise la méthode de formik -> .handleSubmit */}
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input name="name" type="text" className="form-control" 
                        // value={name}
                        // sans onChange, le formulaire est en lecture seule on ne peut pas taper dans les champs
                        // onChange={formik.handleChange}
                        // onBlur permet de valider le champ quand on quitte le champ
                        // Il passe le champ en "touched" (touché) à true
                        // onBlur={formik.handleBlur}
                        // fomrmik a une méthode qui regroupe ces 3 actions( onChange, onBlur, value)
                        { ...formik.getFieldProps("name") }
                        />
                        {/* Si le formik.errors.name existe, on affiche l'erreur */}
                        {formik.errors.name && formik.touched.name && <span className="text-danger">{formik.errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" className="form-control" 
                        { ...formik.getFieldProps("email")}
                        />
                        {formik.errors.email && formik.touched.email  && <span className="text-danger">{formik.errors.email}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="phoneNumber">Numéro de téléphone</label>
                        <input name="phoneNumber" type="text" className="form-control" id="phoneNumber" 
                        { ...formik.getFieldProps("phoneNumber")}
                        />
                        {formik.errors.phoneNumber && formik.touched.phoneNumber && <span className="text-danger">{formik.errors.phoneNumber}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input name="password" type="password" className="form-control" id="password" 
                        { ...formik.getFieldProps("password")}
                        />
                        {formik.errors.password && formik.touched.password && <span className="text-danger">{formik.errors.password}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="passwordConfirmation">Mot de passe (confirmation)</label>
                        <input name="passwordConfirmation" type="password"  className="form-control" id="passwordConfirmation" 
                        { ...formik.getFieldProps("passwordConfirmation")}
                        />
                        {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && <span className="text-danger">{formik.errors.passwordConfirmation}</span>}
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input name="gcu" type="checkbox" className="custom-control-input" id="gcu" 
                        { ...formik.getFieldProps({
                          name: "gcu",
                          checked: false})
                        }
                        />
                        <label className="custom-control-label" htmlFor="gcu">J'accepte <a href="#" _target="blank">les conditions d'utilisation</a></label>
                        {formik.errors.gcu && formik.touched.gcu && <span className="text-danger d-block">{formik.errors.gcu}</span>}
                      </div>
                      
                      <div className="form-group mt-4">
                      <button className="btn btn-light-primary px-4"
                        
                      >Créer mon compte</button>
                      </div>
                      </form>
                  
                 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
