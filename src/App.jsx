import {Route, Routes} from "react-router";
import {HomePage} from "./pages/HomePage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {AppLayout} from "./pages/AppLayout.jsx";
import {ProtectedRoute} from "./components/ProtectedRoute.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";
import {lazy} from "react";

const PostsPage = lazy(() => import("./pages/PostsPage.jsx"));
const PostPage = lazy(() => import("./pages/PostPage.jsx"));

function App() {
    return (<>
        <Routes>
            <Route path={"/"} element={<AppLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"posts"} element={<PostsPage/>}/>
                <Route path={"posts/:id"} element={
                    <ProtectedRoute>
                        <PostPage/>
                    </ProtectedRoute>}/>
                <Route path={"login"} element={<LoginPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </>)
}

export default App
