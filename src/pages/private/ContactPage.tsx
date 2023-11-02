import { useRef, useState } from "react";
import { ContactPageStyles } from ".";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const SERVICE_ID = import.meta.env.VITE_IGEX_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_IGEX_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_IGEX_PUBLIC_KEY;

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  // const [validate, setValidate] = useState(false);
  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  
  

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
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

  const validateForm = (user_name: string, user_email: string, message: string) => {
    if (user_name.length < 2) return "The first name would be longer.";
    if (!user_email.includes("@")) return "Invalid email address";
    if (message.length < 10) return "The message would be longer.";
    console.log(user_name, user_email, message);
    //  setValidate(true);
  };
  const errorMessage = validateForm(form.user_name, form.user_email, form.message);


  return (
    <ContactPageStyles>
      <h2>ContactPage</h2>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <div className="formContainer">
        <form className="formContainer__form" ref={formRef} onSubmit={handleSubmit}>
          <div className="formContainer__form_div">
            <label htmlFor="fistName" className="formContainer__form_div_label">
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
            <button className="formContainer__form_div_btnSend" type="submit" value="Send" id="buttonSubmit">
              {loading ? "Sending..." : "Send"}
            </button>
            <p>{errorMessage}</p>
          </div>
        </form>
      </div>
    </ContactPageStyles>
  );
};

export default ContactPage;
