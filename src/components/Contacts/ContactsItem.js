import PropTypes from "prop-types";

import s from "./Contacts.module.css";
import { MDBBtn } from "mdb-react-ui-kit";

const ContactsItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.item} key={id}>
      <span className={s.text}>{name} :</span>
      <span className={s.text}>{number}</span>

      <MDBBtn
        outline
        rounded
        size="sm"
        className="mx-2"
        color="danger"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </MDBBtn>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
