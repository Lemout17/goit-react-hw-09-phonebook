import { useSelector, useDispatch } from "react-redux";

import ContactsItem from "./ContactsItem";

import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./Contacts.module.css";

export default function Contacts() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);

  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {contacts.length > 0 && (
        <div className={s.container}>
          <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
              <ContactsItem
                key={id}
                name={name}
                number={number}
                onDelete={() => onDelete(id)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
