import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import routes from "../../routes";

import s from "./Navigation.module.css";

export default function Navigation() {
  const isAuth = useSelector(authSelectors.getIsAuth);

  return (
    <nav className={s.nav_bar}>
      <NavLink
        className={s.nav_link}
        activeClassName={s.nav_link__active}
        exact
        to={routes.home}
      >
        Home
      </NavLink>

      {isAuth && (
        <NavLink
          className={s.nav_link}
          activeClassName={s.nav_link__active}
          to={routes.contacts}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
