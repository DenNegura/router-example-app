import {Route, Routes} from "react-router";
import {HomePage} from "./pages/HomePage.jsx";
import {PostsPage} from "./pages/PostsPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {PostPage} from "./pages/PostPage.jsx";
import {AppLayout} from "./pages/AppLayout.jsx";

function App() {
    return (<>
        <Routes>
            <Route path={"/"} element={<AppLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"/posts"} element={<PostsPage/>}/>
                <Route path={"/posts/:id/"} element={<PostPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </>)
}

export default App
