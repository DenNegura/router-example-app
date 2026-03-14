import {NavLink} from "react-router";

function ExtendNavLink({children, ...props}) {

    const styleFn = (state) => {
        return {
            fontWeight: state.isActive ? "700" : "400",
        }
    }

    return (
        <NavLink {...props} style={styleFn}>
            {({isActive}) => (
                <span>
                    {isActive ? "☸" : "⋄"} {children}
                </span>
            )}
        </NavLink>
    )
}

export {ExtendNavLink};
