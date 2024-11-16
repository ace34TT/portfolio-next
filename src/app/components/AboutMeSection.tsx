import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

export const AboutMeSection = () => {
  return (
    <div className={"flex w-full h-full justify-between items-center "}>
      <div className={"max-w-2xl text-left space-y-8"}>
        <h2 className={"text-5xl text-secondary"}>Web developper</h2>
        <h2 className={"text-7xl font-bold"}>RABENANDRASANA Tafinsoa</h2>
        <p>
          I&#39;m a Fullstack Developer with a passion for web development and
          digital solutions. Skilled in React, Node.js, and data visualization,
          I&#39;m eager to explore new technologies like AI and Big Data. Open
          to collaborations and new challenges—let&#39;s create something
          impactful!
        </p>
        <div className={"flex gap-4"}>
          <button
            className={"hover:text-complementary transition-all duration-150"}
          >
            <FaLinkedin size={27} />
          </button>
          <button
            className={"hover:text-complementary transition-all duration-150"}
          >
            <FaFacebookSquare size={27} />
          </button>
          <button
            className={"hover:text-complementary transition-all duration-150"}
          >
            <FaGithub size={27} />
          </button>
        </div>
      </div>
      <img
        src="/images/—Pngtree—david%20half%20body%20statue%20statue_6262738.png"
        alt=""
        className={"h-full -scale-x-100"}
      />
    </div>
  );
};
