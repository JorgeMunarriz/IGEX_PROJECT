import { useRef, useState } from "react";
import { ContactPageStyles } from ".";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    console.log(validateForm(name, value))
    if(!newErrorMessage[name]) {
      const updatedErrors = {...errorMessage};
      delete updatedErrors[name];
      setErrorMessage(updatedErrors);
    }
    if(newErrorMessage[name]){
      setErrorMessage({ ...errorMessage, ...newErrorMessage });

    }
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  // console.log(form.user_name, form.user_email, form.message);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(errorMessage).some((error) => error)) {
      console.log("Hay errores en el formulario");
      return;
    }
  
    
  
    console.log("Formulario válido, intentando enviar el correo...");
    setLoading(true);

    const toastLoading = toast.loading(`The email is being sent`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    emailjs.send(SERVICE_ID, TEMPLATE_ID, { from_name: form.user_name, to_name: "Igex Sl", from_email: form.user_email, to_email: "igexglobal@gmail.com", message: form.message }, PUBLIC_KEY).then(
      (result) => {
        setLoading(false);
        toast.update(toastLoading, { render: "The email is sent", type: "success", isLoading: false, autoClose: 3000 });
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
        toast.update(toastLoading, { render: "The email is not being sent", type: "error", isLoading: false, autoClose: 3000 });
      }
    );
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const validateForm = (name: string, value: string) => {
    const errors: { [key: string]: string } = {};

    
    if (name === "user_name" && value.length < 3) {
      errors.user_name = "The first name should be longer.";
      
    }
    if (name === "user_email") {
      if (!emailRegex.test(value)) {
        errors.user_email = "Invalid email address";
      }
    }
    if (name === "message" && value.length < 10) {
      errors.message = "The message should be longer";
      
    }
    return errors;
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
            <input type="text" id="firstName" name="user_name" className="formContainer__form_div_input" value={form.user_name} onChange={handleChange} required />
          </div>
          <div className="formContainer__form_div">
            <label htmlFor="emailAddress" className="formContainer__form_div_label">
              Contact Email Address
            </label>
            <input type="email" id="emailAddress" name="user_email" className="formContainer__form_div_input" value={form.user_email} onChange={handleChange} required />
          </div>
          <div className="formContainer__form_div">
            <label htmlFor="message" className="formContainer__form_div_label">
              Message
            </label>
            <textarea className="formContainer__form_div_textarea" id="message" name="message" value={form.message} onChange={handleChange} required />
          </div>
          <div className="formContainer__form_div">
            <button className="formContainer__form_div_btnSend" type="submit" value="Send" id="buttonSubmit" disabled={Object.keys(errorMessage).length > 0 || loading }>
              {loading ? "Sending..." : "Send"}
            </button>
            {errorMessage && <p>{errorMessage.user_name}</p>}
            {errorMessage.user_email && <p>{errorMessage.user_email}</p>}
            {errorMessage.message && <p>{errorMessage.message}</p>}
          </div>
        </form>
      </div>
    </ContactPageStyles>
  );
};

export default ContactPage;
