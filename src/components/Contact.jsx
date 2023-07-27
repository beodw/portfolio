import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  const [submittingForm, setSubmittingForm] = useState(false);

  const email = document.getElementById('emailInput');
  const name = document.getElementById('nameInput');
  const message = document.getElementById('messageInput');

  const formIsValid = () => {
    let isValid = true;

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value.trim())){
      email.classList.remove('border-none');
      email.classList.add('border');
      email.classList.add('border-red-700');
      isValid = false;
    }

    if(name.value.trim().length == 0){
      name.classList.remove('border-none');
      name.classList.add('border');
      name.classList.add('border-red-700');
      isValid = false;
    }

     if(message.value.trim().length == 0){
      message.classList.remove('border-none');
      message.classList.add('border');
      message.classList.add('border-red-700');
      isValid = false;
    }

    return isValid;
  }

  const resetForm = () => {
    email.value = ""
    name.value = ""
    message.value = ""
  }

  const removeErroClasses = () => {
      email.classList.remove('border');
      email.classList.remove('border-red-700');
      email.classList.add('border-none');

      name.classList.remove('border');
      name.classList.remove('border-red-700');
      name.classList.add('border-none');

      message.classList.remove('border');
      message.classList.remove('border-red-700');
      message.classList.add('border-none');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formIsValid()) {
      alert('Form is invalid. Please check all fields.')
      return
    };

    removeErroClasses();
    
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name.value,
          to_name: "Beod Wilson",
          from_email: email.value,
          to_email: "beodwilson@gmail.com",
          message: message.value,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");
          resetForm();
        }
      ).catch((error) => {
          console.error(error);
          alert("Oh no, something went wrong 🙁. Please try again.");
        }
      );

  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      id="contact"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              id="nameInput"
              type="text"
              name="name"
              placeholder="What's your full name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              id="emailInput"
              type="email"
              name="email"
              required
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              id="messageInput"
              rows={7}
              name="message"
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
          onClick={handleSubmit}
            type="button"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {submittingForm ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
