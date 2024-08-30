import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <ul className={css.list}>
        <li className={css.item}>
          <FaUser className={css.icon} />
          <p className={css.text}>{name}</p>
        </li>
        <li className={css.item}>
          <FaPhone className={css.icon} />
          <p className={css.text}>{number}</p>
        </li>
      </ul>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
