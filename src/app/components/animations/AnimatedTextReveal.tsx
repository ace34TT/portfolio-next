import { motion } from "framer-motion";

export const AnimatedTextReveal = ({ text }: { text: string }) => (
  <span className="block">
    {text.split("").map((char, index) => (
      <span key={index} className="inline-block overflow-hidden">
        <motion.span
          className="inline-block"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            ease: [0.6, 0.01, -0.05, 0.95],
          }}
        >
          {char}
        </motion.span>
      </span>
    ))}
  </span>
);
