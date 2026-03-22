import {Link, NavLink, Outlet, useNavigate} from "react-router";
import {useAuth} from "../providers/AuthProvider.jsx";
import {Suspense} from "react";

function AppLayout() {
    const {user, signOut} = useAuth();

    const navigate = useNavigate();

    return (
        <>
            <header className={"app-header"}>
                <nav>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/posts"}>Posts</NavLink>
                </nav>
                <div className={"user-info"}>
                    {user ? (
                        <>
                            <label>Welcome, {user.username}</label>
                            <button onClick={
                                () => signOut(() => navigate("/", {replace: true}))
                            }>Logout</button>
                        </>
                    ) : <Link to={"/login"}>Login</Link>}
                </div>
            </header>
            <div className={"app-page-container"}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet/>
                </Suspense>
            </div>
        </>
    )
}

export {AppLayout}