import { Navigate, useLocation, useNavigate } from "react-router-dom"

export const Authorized = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()

    if (localStorage.getItem("rabbit_user")) {
        return children
    }
    else {
        return <Navigate
            to={`/login/${location.search}`}
            replace
            state={{ location }} />
    }
}
