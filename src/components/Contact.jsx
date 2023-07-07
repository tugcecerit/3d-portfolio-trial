import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { styles } from "../styles";
import { CoffeeCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github } from "../assets";
import { linkedin } from "../assets";

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_25kecsc",
        "template_ga8x03h",
        form.current,
        "iwiCbJAoKtVVWTs6i"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeModal = () => {
    setIsMessageSent(false);
  };

  const handleClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);
  };

  return (
    <div className={`xl:mt-8 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#343536] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={"text-primary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Contact</h3>
        <div className='flex mt-2'>
        <div
              onClick={() => window.open("https://github.com/tugcecerit", "_blank")}
              className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open("https://www.linkedin.com/in/tugcecerit/", "_blank")}
              className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={linkedin}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='mt-8 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name="from_name"
              value={form.name}
              placeholder="What's your name?"
              className='bg-primary py-4 px-6 placeholder:text-secondary text-[#999999] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name="reply_to" 
              placeholder="What's your email address?"
              className='bg-primary py-4 px-6 placeholder:text-secondary text-[#999999] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={5}
              name="message"
              placeholder='What would you say?'
              className='bg-primary py-4 px-6 placeholder:text-secondary text-[#999999] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <motion.button
            type='submit'
            value='Send'
            className={`black-gradient w-22 h-10 rounded-full flex justify-center items-center shadow-md shadow-primary cursor-pointer ${isButtonClicked ? "button-clicked" : ""}`}
            onClick={handleClick}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <CoffeeCanvas />
      </motion.div>

      {isMessageSent && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl text-[#666666] font-bold mb-4">Message Sent!</h2>
            <p className="text-m text-[#666666]">Your message has been successfully sent.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-[#d6aecd] text-white rounded-lg hover:bg-[#d6aecd]-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default SectionWrapper(Contact, "contact");