import {NavLink, Outlet} from "react-router";

function AppLayout() {
    return (
        <>
            <header className={"app-header"}>
                <nav>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/posts"}>Posts</NavLink>
                </nav>
            </header>
            <div className={"app-page-container"}>
                <Outlet/>
            </div>
        </>
    )
}

export {AppLayout}