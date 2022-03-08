import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form } from 'react-bootstrap';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eswtea8', 'template_arkt8rs', form.current, 'user_Z0scSyKh78tYvKxwycHiO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center my-5">
        {/* <h2 className="text-center">
            Contact Me
        </h2> */}
        <form className="w-100" ref={form} onSubmit={sendEmail}>

            <Form.Floating className="mb-3">
            <Form.Control
            
            type="text" name="user_name" required
            />
            <label htmlFor="floatingInputCustom">Name</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
            <Form.Control
            
            type="email"
            name="user_email" required
            placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Your Email</label>
            </Form.Floating>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message :</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
           
            <input className="btn btn-success" type="submit" value="Send" />
        </form>
        
    </Container>
  );
};

export default Contact;