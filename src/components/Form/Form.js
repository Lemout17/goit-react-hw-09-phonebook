import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./Form.module.css";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (name) => (e) => {
    switch (name) {
      case "name":
        return setName(e.target.value);

      case "number":
        return setNumber(e.target.value);

      default:
        return null;
    }
  };

  const contacts = useSelector(contactsSelectors.getContacts);

  const dispatch = useDispatch();

  const onSubmit = () =>
    dispatch(contactsOperations.addContact({ name, number }));

  const handleSubmit = (e) => {
    e.preventDefault();

    contacts.find((contact) => contact.name === name)
      ? alert(`This person ${name} is already in contacts`)
      : contacts.find((contact) => contact.number === number)
      ? alert(`This number ${number} is already in contacts`)
      : onSubmit();

    setName("");
    setNumber("");
  };

  return (
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
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <MDBInput
        className="text-light"
        label="Number"
        id="typePhone"
        contrast
        autoComplete="off"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange("number")}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <MDBBtn rounded>Add contact</MDBBtn>
    </form>
  );
}
