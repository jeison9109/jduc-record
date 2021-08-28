import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkwqnqa");
  if (state.succeeded) {
    return <p>Gracias por tu mensaje!!</p>;
  }
  return (
    <form
      method="POST"
      id="yeisonivanserna@gmail.com"
      action="https://formspree.io/f/xqkwqnqa"
      onSubmit={handleSubmit}
    >
      <div className="container">
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Last Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="col-75">
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: 200 }}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <input className="btn" type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}

const Contacto = () => {
  return (
    <div>
      <div className="titulo-contacto">
        <h1>CONTACTANOS</h1>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contacto;
