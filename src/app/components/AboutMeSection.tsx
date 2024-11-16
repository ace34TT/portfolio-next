import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  startDelay?: number;
}

interface SocialLink {
  icon: IconType;
  link: string;
  label: string;
}

interface SocialIconProps extends SocialLink {
  animationDelay: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  startDelay = 0,
}) => (
  <div className="whitespace-nowrap overflow-hidden">
    {text.split("").map((char, index) => (
      <span key={`char-${index}`} className="inline-block">
        <motion.span
          className="inline-block"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: startDelay + index * 0.03,
            ease: [0.6, 0.01, -0.05, 0.95],
          }}
        >
          {char}
        </motion.span>
      </span>
    ))}
  </div>
);

const socialLinks: SocialLink[] = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/your-profile",
    label: "LinkedIn",
  },
  {
    icon: FaFacebookSquare,
    link: "https://www.facebook.com/your-profile",
    label: "Facebook",
  },
  {
    icon: FaGithub,
    link: "https://github.com/your-profile",
    label: "GitHub",
  },
];

const SocialIcon: React.FC<SocialIconProps> = ({
  icon: Icon,
  link,
  label,
  animationDelay,
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:text-complementary transition-all duration-150"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: animationDelay }}
  >
    <Icon size={27} />
  </motion.a>
);

interface AnimationTimings {
  readonly ANIMATION_BASE_DELAY: number;
  readonly TEXT_STAGGER: number;
  readonly SOCIAL_STAGGER: number;
}

const TIMINGS: AnimationTimings = {
  ANIMATION_BASE_DELAY: 0.5, // Base delay for the first animation
  TEXT_STAGGER: 0.5, // Delay between text sections
  SOCIAL_STAGGER: 0.3, // Delay between social icons
} as const;

export const AboutMeSection: React.FC = () => {
  const { ANIMATION_BASE_DELAY, TEXT_STAGGER, SOCIAL_STAGGER } = TIMINGS;

  return (
    <div className="flex w-full h-full justify-between items-center">
      <div className="max-w-3xl text-left space-y-8">
        <motion.h2
          className="text-5xl text-secondary"
          initial={{ x: "100px", opacity: 0 }}
          animate={{ x: "0px", opacity: 1 }}
          transition={{ duration: 0.5, delay: ANIMATION_BASE_DELAY }}
        >
          Web Developer
        </motion.h2>

        <h2 className="text-7xl font-bold">
          <AnimatedText
            text="RABENANDRASANA"
            startDelay={ANIMATION_BASE_DELAY + TEXT_STAGGER}
          />
          <AnimatedText
            text="Tafinasoa"
            startDelay={ANIMATION_BASE_DELAY + TEXT_STAGGER * 2}
          />
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: ANIMATION_BASE_DELAY + TEXT_STAGGER * 3,
          }}
        >
          I&#39;m a Fullstack Developer with a passion for web development and
          digital solutions. Skilled in React, Node.js, and data visualization,
          I&#39;m eager to explore new technologies like AI and Big Data. Open
          to collaborations and new challenges—let&#39;s create something
          impactful!
        </motion.p>

        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={social.label}
              {...social}
              animationDelay={
                ANIMATION_BASE_DELAY + TEXT_STAGGER * 4 + index * SOCIAL_STAGGER
              }
            />
          ))}
        </div>
      </div>

      <motion.img
        src="/images/—Pngtree—david%20half%20body%20statue%20statue_6262738.png"
        alt="Profile statue"
        className="h-full -scale-x-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: ANIMATION_BASE_DELAY + TEXT_STAGGER * 5,
        }}
      />
    </div>
  );
};

export default AboutMeSection;
