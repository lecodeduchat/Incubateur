import { Navigate } from "react-router-dom";
import { accountService } from "@/_services/account.service";

// Dans certaines applications,
// AuthGuard peut être appelé AuthProvider ou AuthRoute, etc..
const AuthGuard = ({children}) => {
    if(!accountService.isLogged()) {
        return <Navigate to="/auth/login" />;
    }
    return children;
};

export default AuthGuard;