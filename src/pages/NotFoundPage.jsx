import {useNavigate} from "react-router";

function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <div>
                <p>The page you are looking for does not exist.</p>
            </div>
            <div className={"notfound-button-container"}>
                <button onClick={() => navigate(-1)}>Go Back</button>
                <button onClick={() => navigate("/")}>Go Home</button>
                <button onClick={() => navigate("/posts")}>Go to Posts</button>
            </div>
        </div>
    )
}

export {NotFoundPage};