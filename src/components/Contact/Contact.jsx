import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import ModalEditContact from "../ModalEditContact/ModalEditContact";
import { useState } from "react";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => {
        toast.success("The contact was successfully deleted.");
      });
  };

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
      <div className={css.list}>
        <button
          type="button"
          className={css.btn}
          onClick={() => onDeleteContact(id)}
        >
          <RiDeleteBinLine size={22} />
        </button>
        <button
          type="button"
          className={css.btn}
          onClick={() => setModalOpen(true)}
        >
          <RiEdit2Line size={22} /> {/* Edit */}
        </button>
      </div>
      {isModalOpen && (
        <ModalEditContact
          id={id}
          name={name}
          number={number}
          onClose={() => setModalOpen(false)}
          open={isModalOpen}
        />
      )}
    </div>
  );
};

export default Contact;
