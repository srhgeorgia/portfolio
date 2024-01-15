import React, { useRef, useState, ChangeEvent } from "react";
import Lottie from "lottie-react";
import emailjs from "emailjs-com";
import styles from "../styles/contact.module.css";
import contact from "../utils/contact.json";
import { motion } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sendButtonText, setSendButtonText] = useState("Send");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Submitting form:", form);
    setSendButtonText("Sending...");
    emailjs
      .send(
        "service_198913",
        "template_198913",
        {
          from_name: form.name,
          to_name: "Sarah",
          from_email: form.email,
          to_email: "sgeorgia0297@gmail.com",
          message: form.message,
        },
        "o0JM41bUhRtgrUbua"
      )
      .then(
        () => {
          console.log("Email sent successfully!");
          setSendButtonText("Sent!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setSendButtonText("Send");
          }, 3000);
        },
        (error) => {
          console.error("Error sending email:", error);
          console.log(error);
          setSendButtonText("Send Again");
        }
      );
  };

  const formVariants = {
    initial: { x: "-100%" },
    animate: { x: 0 },
  };

  const titleVariants = {
    initial: { x: "-100%" },
    animate: { x: 0 },
  };

  const transition = { duration: 0.9, type: "spring" };

  return (
    <div>
      <div className={styles.containerHome}>
        <div className={styles.content}>
          <div className={styles.contentForm}>
            <motion.div
              variants={titleVariants}
              initial="initial"
              animate="animate"
              transition={transition}
              className={styles.contentString}
            >
              <h1 className={styles.title}>Contact</h1>
            </motion.div>

            <motion.form
              variants={formVariants}
              initial="initial"
              animate="animate"
              onSubmit={handleSubmit}
              transition={transition}
              ref={formRef}
              className={styles.form}
            >
              <label>
                Nome:
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  required
                />
              </label>
              <label>
                Mensagem:
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Send your Message"
                  required
                />
              </label>
              <button type="submit">{sendButtonText}</button>
              <div className={styles.icons}>
                <motion.a
                  href="https://github.com/srhgeorgia"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src="/src/assets/github.png"
                    alt="github"
                    className={styles.github}
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/srhgeorgia/"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src="/src/assets/linkedin.png"
                    alt="linkedin"
                    className={styles.linkedin}
                  />
                </motion.a>
                <motion.a
                  href="https://api.whatsapp.com/send?phone=5548999548565&text=Oi!%20Te%20respondo%20assim%20que%20puder."
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src="/src/assets/whatsapp.png"
                    alt="whatsapp"
                    className={styles.whatsapp}
                  />
                </motion.a>
              </div>
            </motion.form>
          </div>

          <div className={styles.gif}>
            <Lottie animationData={contact} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
