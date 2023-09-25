import { Navigate } from "react-router-dom";

// Dans certaines applications,
// AuthGuard peut être appelé AuthProvider ou AuthRoute, etc..
const AuthGuard = ({children}) => {
    let logged = false;

    if(!logged) {
        return <Navigate to="/auth/login" />;
    }
    return children;
};

export default AuthGuard;