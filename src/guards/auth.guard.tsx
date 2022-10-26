import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models/routes";
import { AppStore } from "../redux/store";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.Login} />
  );
};

export default AuthGuard;
