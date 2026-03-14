import {Route, Routes} from "react-router";
import {HomePage} from "./pages/HomePage.jsx";
import {PostsPage} from "./pages/PostsPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {PostPage} from "./pages/PostPage.jsx";
import {PrivatePage} from "./pages/PrivatePage.jsx";
import {ProtectedRoute} from "./components/ProtectedRoute.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";
import {AppLayout} from "./pages/AppLayout.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<AppLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"/posts"} element={<PostsPage/>}/>
                    <Route path={"/private"} element={
                        <ProtectedRoute>
                            <PrivatePage/>
                        </ProtectedRoute>
                    }/>
                    <Route path={"/posts/:id"} element={<PostPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
