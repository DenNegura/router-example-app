import {NavLink, Route, Routes} from "react-router";
import {HomePage} from "./pages/HomePage.jsx";
import {PostsPage} from "./pages/PostsPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {PostPage} from "./pages/PostPage.jsx";

function App() {
    return (
        <>
            <header className={"app-header"}>
                <nav>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/posts"}>Posts</NavLink>
                </nav>
            </header>
            <div className={"app-page-container"}>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/posts"} element={<PostsPage/>}/>
                    <Route path={"/posts/:id"} element={<PostPage/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
