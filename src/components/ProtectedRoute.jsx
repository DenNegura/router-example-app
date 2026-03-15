import {useAuth} from "../providers/AuthProvider.jsx";
import {Navigate, useLocation} from "react-router";

function ProtectedRoute({children}) {
    const {user} = useAuth();
    const location = useLocation();
    console.log(location);

    if (!user) {
        return <Navigate to={"/login"} replace state={{from: location}}/>
    }
    return children;
}

export {ProtectedRoute}

