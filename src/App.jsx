import {Link, Route, Routes} from "react-router";
import {HomePage} from "./pages/HomePage.jsx";
import {PostsPage} from "./pages/PostsPage.jsx";

function App() {

    return (
        <>
            <header className={"app-header"}>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/posts"}>Posts</Link>
                </nav>
            </header>
            <div className={"app-page-container"}>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/posts"} element={<PostsPage/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
