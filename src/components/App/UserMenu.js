import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

import defaultImage from "../../img/poggers.png";
import s from "./UserMenu.module.css";

import { MDBBtn } from "mdb-react-ui-kit";

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultImage;

  const dispatch = useDispatch();
  const onLogOut = () => dispatch(authOperations.logOut());

  return (
    <div className={s.container}>
      <img className={s.img} src={avatar} alt="" />
      <span className={s.text}>Hi, {name}</span>

      <MDBBtn rounded className="mx-2" color="danger" onClick={onLogOut}>
        Log out
      </MDBBtn>
    </div>
  );
};

export default UserMenu;
