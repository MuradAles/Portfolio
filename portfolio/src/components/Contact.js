import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_jg0p9en',
            'template_pe9n6ir',
            form.current,
            'unREbDAOLgvEkSfX5'
        )
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
                form.current.reset();
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-container">
            <h1 className="Contact">Contact</h1>
            {messageSent ? (
                <div>
                    <p className="text-info">Message sent successfully!</p>
                </div>
            ) : (
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user_name" className="text-info">
                        Name
                    </label>
                    <input id="user_name" type="text" name="user_name" />
                    <label htmlFor="user_email" className="text-info">
                        Email
                    </label>
                    <input id="user_email" type="email" name="user_email" />
                    <label htmlFor="message" className="text-info">
                        Message
                    </label>
                    <textarea id="message" name="message" />
                    <input type="submit" value="Send" className="submit-button" />
                </form>
            )}
        </div>
    );
};

export default Contact;
