import {createContext, useContext} from "react";

const AuthContext = createContext(null);

function AuthProvider({children}) {
    return (
        <AuthContext.Provider value={null /*{login: "Jone"}*/}>
            { children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};