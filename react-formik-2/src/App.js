import Aside from "./components/Aside";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function emailAsyncValidation(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "delportelaurence@gmail.com") {
        reject(false);
      } else {
        resolve(true);
      }
    }, 2000);
  });
}

function formSubmission(formData){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Utilisateur créé avec succès");
    }, 2000);

  });
}

// Création d'un chemin de validation avec Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Le nom est obligatoire"),
  email: Yup.string()
            .email("L'email n'est pas valide")
            .required("L'email est obligatoire")
            .test("email-unique", "Cet email est déjà utilisé", async (email) =>{
              let isUnique = false;
              try {
                const response = await emailAsyncValidation(email);
                isUnique = response;
              } catch (error) {
                console.log(error);
              }
              return isUnique;
            }),
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

  async function createUser(formValues, onSubmitProps) {
    try {
      const response = await formSubmission(formValues);
      onSubmitProps.resetForm();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }


  
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
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={createUser}
                >
                  {/* formik est un objet qui contient des propriétés et des méthodes */}
                  {
                    (formik) => (
                      <Form>
                      <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <Field name="name" type="text" className="form-control" id="name" />
                        <ErrorMessage name="name" component="span" className="text-danger" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" className="form-control" id="email" />
                        <ErrorMessage name="email" component="span" className="text-danger" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phoneNumber">Numéro de téléphone</label>
                        <Field name="phoneNumber" type="text" className="form-control" id="phoneNumber" />
                        <ErrorMessage name="phoneNumber" component="span" className="text-danger" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <Field name="password" type="password" className="form-control" id="password" />
                        <ErrorMessage name="password" component="span" className="text-danger" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="passwordConfirmation">Mot de passe (confirmation)</label>
                        <Field name="passwordConfirmation" type="password" className="form-control" id="passwordConfirmation" />
                        <ErrorMessage name="passwordConfirmation" component="span" className="text-danger" />
                      </div>
                      <div className="custom-control custom-checkbox">
                        <Field name="gcu" type="checkbox" className="custom-control-input" id="gcu" />
                        <label className="custom-control-label" htmlFor="gcu">J'accepte <a href="#" _target="blank">les conditions d'utilisation</a></label>
                        <ErrorMessage name="gcu" component="div" className="text-danger" />
                      </div>
                      <div className="form-group mt-4">
                      <button className="btn btn-light-primary px-4"
                        disabled={!formik.isValid || formik.isSubmitting}
                      >Créer mon compte</button>
                      </div>
                      </Form>
                    )
                  }
                </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
