import React,{useState}from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzgljwr");
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    await handleSubmit(event);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  return (
    <section className="contact"  id="contact">
    <h2 className="heading">Contáctame <span></span></h2>
    {submitted ? (
        <div className="success-message">
          <p className='heading'>Thanks for your message. I will reply as soon as possible!</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="input-box">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
  
          <textarea
            id="message"
            name="message"
            placeholder="Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="btn">
            Enviar Mensaje
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact