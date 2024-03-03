import { Outlet, Navigate } from "react-router-dom";

function Authorizer() {
    const isAuthorized = true

    return isAuthorized ? <Outlet /> : <Navigate to="/" />
}

export default Authorizer;
