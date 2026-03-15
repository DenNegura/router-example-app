import {createContext, useCallback, useContext, useMemo, useState} from "react";

const AuthContext = createContext(null);

function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    const signIn = useCallback((user, afterIn) => {
        setUser(user);
        afterIn && afterIn();
    }, [])

    const signOut = useCallback((afterOut) => {
        setUser(null);
        afterOut && afterOut();
    }, [])

    const state = useMemo(() => ({user, signIn, signOut}), [user])

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};