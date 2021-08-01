import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Section from "../components/Section";
import Form from "../components/Form";
import Contacts from "../components/Contacts";
import ContactsFilter from "../components/Contacts/ContactsFilter";
import Loader from "react-loader-spinner";

import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from "../redux/contacts/contacts-selectors";

import s from "./ContactsView.module.css";

export default function ContactsView() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const contactsError = useSelector(contactsSelectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContact = () => dispatch(contactsOperations.fetchContact());

    fetchContact();
  }, [dispatch]);

  return (
    <main>
      <Section title={"Contacts"}>
        <div className={s.container}>
          <Form />

          {contacts.length > 1 && <ContactsFilter />}

          {isLoading ? (
            <Loader
              className={s.loader}
              type="Rings"
              color="#00BFFF"
              height={80}
              width={80}
            />
          ) : contactsError ? (
            <h2 className={s.error}>
              Sorry, something went wrong({contactsError})
            </h2>
          ) : (
            <Contacts />
          )}
        </div>
      </Section>
    </main>
  );
}
