import {useLocation, useNavigate} from "react-router";
import {useAuth} from "../providers/AuthProvider.jsx";

function LoginPage() {
    const {signIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname;

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(
            {username: e.target.username.value},
            () => navigate(from || "/", {replace: true})
        );
    }

    return (
        <>
            <h1>Login Page</h1>
            {
                from ? <p>You must login before going to the page: {from}</p> : <></>
            }
            <form onSubmit={handleSubmit} autoComplete={"false"} className={"login-form"}>
                <input type={"text"} name={"username"} placeholder={"Username"}/>
                <button type={"submit"}>Login</button>
            </form>
        </>
    )
}

export {LoginPage}