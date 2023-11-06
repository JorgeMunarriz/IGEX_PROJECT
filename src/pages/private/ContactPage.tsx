import { useRef, useState } from "react";
import { ContactPageStyles } from ".";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type FormState = {
  user_name: string;
  user_email: string;
  message: string;
};

const SERVICE_ID = import.meta.env.VITE_IGEX_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_IGEX_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_IGEX_PUBLIC_KEY;

const ContactPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({});
  const [form, setForm] = useState<FormState>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    const newErrorMessage = validateForm(name, value);
    setErrorMessage({ ...errorMessage, [name]: newErrorMessage });

  };

  const formRef = useRef<HTMLFormElement | null>(null);

  
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.values(form).some((name, value) => validateForm(name, value.toString()));
    if (hasErrors) {
      return;
    }

    setLoading(true);
    
   

      const toastLoading = toast.loading(`The email is being send`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      emailjs.send(SERVICE_ID, TEMPLATE_ID, { from_name: form.user_name, to_name: "Igex Sl", from_email: form.user_email, to_email: "munarrizjorge@gmail.com", message: form.message }, PUBLIC_KEY).then(
        (result) => {
          setLoading(false);
          toast.update(toastLoading, {render: "The email is sended", type: "success", isLoading: false, autoClose: 3000})
          setForm({
            user_name: "",
            user_email: "",
            message: "",
          });
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          toast.update(toastLoading, {render: "The album is not created", type: "error", isLoading: false, autoClose: 3000})
        }
      );
    
  };
  

   const validateForm = (name: string, value: string) => {
    if (name === "user_name" && value.length < 2) {
      return "The first name should be longer.";
    }
    if (name === "user_email" && !value.includes("@")) {
      return "Invalid email address";
    }
    if (name === "message" && value.length < 10) {
      return "The message should be longer";
    }
    return "";
  };


  return (
    <ContactPageStyles>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className="formContainer">
      <h2 className="formContainer__title">ContactPage</h2>

        <form className="formContainer__form" ref={formRef} onSubmit={handleSubmit}>
          <div className="formContainer__form_div">
            <label htmlFor="firstName" className="formContainer__form_div_label">
              First Name
            </label>
            <input type="text" id="firstName" name="user_name" className="formContainer__form_div_input" value={form.user_name} onChange={handleChange} />
          </div>
          <div className="formContainer__form_div">
            <label htmlFor="emailAddress" className="formContainer__form_div_label">
              Contact Email Address
            </label>
            <input type="email" id="emailAddress" name="user_email" className="formContainer__form_div_input" value={form.user_email} onChange={handleChange} />
          </div>
          <div className="formContainer__form_div">
            <label htmlFor="message" className="formContainer__form_div_label">
              Message
            </label>
            <textarea className="formContainer__form_div_textarea" id="message" name="message" value={form.message} onChange={handleChange} />
          </div>
          <div className="formContainer__form_div">
            <button className="formContainer__form_div_btnSend" type="submit" value="Send" id="buttonSubmit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
            {errorMessage && <p>{errorMessage.message}</p>}
            
          </div>
        </form>
      </div>
    </ContactPageStyles>
  );
};

export default ContactPage;
