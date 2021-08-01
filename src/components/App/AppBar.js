import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import s from "./AppBar.module.css";
import { authSelectors } from "../../redux/auth";
import Clock from "../Clock";

export default function AppBar() {
  const isAuth = useSelector(authSelectors.getIsAuth);

  return (
    <header className={s.header}>
      <Navigation />

      {isAuth && <Clock />}

      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
