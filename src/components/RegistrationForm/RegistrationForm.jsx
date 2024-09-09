import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Enter name more than 3 characters!")
    .max(40, "Enter name less than 40 characters!")
    .required("Required"),
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be greater than 8 characters!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.wrap}>
      <div className={css.formBackground}>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={RegistrationValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label className={css.formLabel}>
              <span>Name:</span>
              <Field
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Full Name"
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="name"
              />
            </label>

            <label className={css.formLabel}>
              <span>Email:</span>
              <Field
                type="email"
                name="email"
                autoComplete="off"
                placeholder="email"
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="email"
              />
            </label>
            <label className={css.formLabel}>
              <span>Password:</span>
              <Field
                type="password"
                name="password"
                autoComplete="off"
                placeholder="password"
              />
              <ErrorMessage
                className={css.errorMessage}
                component="p"
                name="password"
              />
            </label>

            <button type="submit" className={css.formAddBtn}>
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;

// export const RegistrationForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     console.log(form.elements.name.value);

//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );

//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
