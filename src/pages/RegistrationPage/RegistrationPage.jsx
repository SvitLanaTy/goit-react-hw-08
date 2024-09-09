import { Toaster } from "react-hot-toast";
import DocumentTitle from "../../components/DocumentTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm />
      <div>
        <Toaster />
      </div>
    </div>
  );
}
