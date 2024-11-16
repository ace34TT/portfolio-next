"use client";

import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <div
      className={"h-full  w-full flex items-center container mx-auto gap-40"}
    >
      <div>
        <motion.img
          src="/images/pilar.png"
          alt="Pilar"
          className="w-full h-auto"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <form action="" method="post" className={"space-y-8 flex-grow mx-auto"}>
        <h2 className={"text-4xl"}>Let&#39;s connect !</h2>
        <div className={"flex flex-col gap-4"}>
          <label htmlFor="">Your mail :</label>
          <input
            type="email"
            name="email"
            placeholder={"you@example.com"}
            required
            className={"bg-transparent border-2 border-secondary p-2 px-4"}
          />
        </div>
        <div className={"flex flex-col gap-4"}>
          <label htmlFor="">Your message :</label>
          <textarea
            name="message"
            className={"bg-transparent border-2 border-secondary p-2 px-4"}
            rows={3}
            required
            placeholder={"Your message..."}
          ></textarea>
        </div>
        <button type="submit" className={"bg-secondary w-full py-2"}>
          Send
        </button>
        <div className={"flex gap-10 w-full justify-center m"}>
          <Link
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:text-complementary transition-all duration-150"}
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:text-complementary transition-all duration-150"}
          >
            <FaFacebookSquare size={40} />
          </Link>
          <Link
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className={"hover:text-complementary transition-all duration-150"}
          >
            <FaGithub size={40} />
          </Link>
        </div>
      </form>
    </div>
  );
};
