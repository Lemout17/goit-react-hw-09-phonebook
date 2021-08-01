import { connect } from "react-redux";

import ContactsItem from "./ContactsItem";

import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./Contacts.module.css";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.length > 0 && (
        <div className={s.container}>
          <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
              <ContactsItem
                id={id}
                name={name}
                number={number}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
