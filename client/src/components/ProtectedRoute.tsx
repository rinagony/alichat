import { Navigate, Outlet } from "react-router-dom";
import CurrentUserInterface from "../interface";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = () => {
    const user: CurrentUserInterface = useAppSelector((state) => state.currentUser);
    return user.auth ? <Outlet /> : <Navigate to="/login" />;
  };

export default ProtectedRoute;