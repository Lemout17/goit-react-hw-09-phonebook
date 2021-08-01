import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import s from "../components/Form/Form.module.css";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (name) => (e) => {
    switch (name) {
      case "name":
        return setName(e.target.value);

      case "email":
        return setEmail(e.target.value);

      case "password":
        return setPassword(e.target.value);

      default:
        return null;
    }
  };

  const dispatch = useDispatch();

  const onRegister = (data) => dispatch(authOperations.register(data));

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <h1>Register</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <MDBInput
          className="text-light"
          label="Name"
          id="typeText"
          contrast
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={handleChange("name")}
        />

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

        <MDBBtn rounded>Register</MDBBtn>
      </form>
    </div>
  );
}
