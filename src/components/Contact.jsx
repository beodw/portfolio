import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  const [submittingForm, setSubmittingForm] = useState(false);

  const email = useRef(null);
  const name = useRef(null);
  const message = useRef(null);

  const formIsValid = () => {
    let isValid = true;

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.current.value.trim())){
      email.current.classList.remove('border-none');
      email.current.classList.add('border');
      email.current.classList.add('border-red-700');
      isValid = false;
    }

    if(name.current.value.trim().length == 0){
      name.current.classList.remove('border-none');
      name.current.classList.add('border');
      name.current.classList.add('border-red-700');
      isValid = false;
    }

     if(message.current.value.trim().length == 0){
      message.current.classList.remove('border-none');
      message.current.classList.add('border');
      message.current.classList.add('border-red-700');
      isValid = false;
    }

    return isValid;
  }

  const resetForm = () => {
    email.current.value = ""
    name.current.value = ""
    message.current.value = ""
  }

  const removeErroClasses = () => {
      email.current.classList.remove('border');
      email.current.classList.remove('border-red-700');
      email.current.classList.add('border-none');

      name.current.classList.remove('border');
      name.current.classList.remove('border-red-700');
      name.current.classList.add('border-none');

      message.current.classList.remove('border');
      message.current.classList.remove('border-red-700');
      message.current.classList.add('border-none');
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
        import.meta.env.VITE_APP_EMAIL.currentJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL.currentJS_TEMPLATE_ID,
        {
          from_name: name.current.value,
          to_name: "Beod Wilson",
          from_email: email.current.value,
          to_email: "beodwilson@gmail.com",
          message: message.current.value,
        },
        import.meta.env.VITE_APP_EMAIL.currentJS_PUBLIC_KEY
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
              ref={name}
              id="name"
              type="text"
              name="name"
              placeholder="What's your full name.current?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email.current</span>
            <input
              ref={email}
              type="email"
              name="email"
              required
              placeholder="What's your email.current address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message.current</span>
            <textarea
              ref={message}
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
