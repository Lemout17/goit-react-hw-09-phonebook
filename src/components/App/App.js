import "modern-normalize/modern-normalize.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import s from "./App.module.css";

import { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import routes from "../../routes";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import AppBar from "../App/AppBar";
import Loader from "react-loader-spinner";

const HomeView = lazy(() =>
  import("../../views/HomeView" /* webpackChunkName: "home-page" */)
);
const ContactsView = lazy(() =>
  import("../../views/ContactsView" /* webpackChunkName: "contacts-page" */)
);
const LoginView = lazy(() =>
  import("../../views/LoginView" /* webpackChunkName: "login-page" */)
);
const RegisterView = lazy(() =>
  import("../../views/RegisterView" /* webpackChunkName: "register-page" */)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense
        fallback={
          <Loader
            className={s.loader}
            type="Rings"
            color="#00BFFF"
            height={80}
            width={80}
          />
        }
      >
        <Switch>
          <PublicRoute exact path={routes.home} component={HomeView} />
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
            component={RegisterView}
          />
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
            component={LoginView}
          />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsView}
            redirectTo={routes.login}
          />
        </Switch>
      </Suspense>
    </>
  );
}
