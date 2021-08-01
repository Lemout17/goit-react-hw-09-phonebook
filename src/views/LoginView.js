import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import { MDBInput } from "mdb-react-ui-kit";

import s from "../components/Form/Form.module.css";
import { MDBBtn } from "mdb-react-ui-kit";

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// }

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (name) => (e) => {
    switch (name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);

      default:
        return null;
    }
  };

  const dispatch = useDispatch();
  const onLogin = (data) => dispatch(authOperations.logIn(data));

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <h1>Log in</h1>

      <form className={s.form} onSubmit={handleSubmit}>
        <MDBInput
          className="text-light"
          label="Email"
          id="typeEmail"
          contrast
          autoComplete="off"
          type="email"
          name="email"
          value={email}
          onChange={handleChange("email")}
        />

        <MDBInput
          className="text-light"
          label="Password"
          id="typePassword"
          contrast
          type="password"
          name="password"
          value={password}
          onChange={handleChange("password")}
        />

        <MDBBtn rounded>Log in</MDBBtn>
      </form>
    </div>
  );
}
