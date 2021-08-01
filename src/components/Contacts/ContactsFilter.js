import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import contactsActions from "../../redux/contacts/contacts-actions";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./ContactsFilter.module.css";
import { MDBInput } from "mdb-react-ui-kit";

export default function ContactsFilter() {
  const value = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();
  const onChange = (e) =>
    dispatch(contactsActions.filterContact(e.target.value));

  return (
    <form className={s.form}>
      <MDBInput
        className="text-light"
        label="Filter contacts by name"
        id="typeText"
        autoComplete="off"
        contrast
        type="text"
        name="name"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

ContactsFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
