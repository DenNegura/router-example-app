import {useAuth} from "../providers/AuthProvider.jsx";
import {Navigate} from "react-router";

function ProtectedRoute({children}) {
    const user = useAuth();
    if (!user) {
        return <Navigate to={"/login"}/>
    }
    return children;
}

export {ProtectedRoute}

