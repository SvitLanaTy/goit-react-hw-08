import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const numberRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
  number: Yup.string()
    .matches(numberRegExp, "Requited format 'xxx-xxx-xxxx'")
    .required("Required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
});

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const AddContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, formActions) => {
    console.log(formData);

    dispatch(addContact(formData));
    formActions.resetForm();
    formActions.setErrors({});
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Full Name" />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Number</span>
            <Field type="tel" name="number" placeholder="xxx-xxx-xxxx" />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddContactForm;
