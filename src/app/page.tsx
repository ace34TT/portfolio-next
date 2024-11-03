import {Section} from "@/app/components/Section";

export default function Home() {
  return (
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <Section className="bg-primary">
          <div className={"flex w-full h-full justify-between items-center px-5 md:px-20 2xl:px-40" }>
            <div className={"max-w-2xl text-left space-y-8"}>
              <h2 className={"text-5xl text-secondary"}>Web developper</h2>
              <h2 className={"text-7xl font-bold"}>RABENANDRASANA Tafinsoa</h2>
              <p>
                I&#39;m a Fullstack Developer with a passion for web development and digital solutions. Skilled in
                React,
                Node.js, and data visualization, I’m eager to explore new technologies like AI and Big Data. Open to
                collaborations and new challenges—let’s create something impactful!
              </p>
            </div>
            <img
                src="/images/—Pngtree—david%20half%20body%20statue%20statue_6262738.png"
                alt=""
                className={"h-full -scale-x-100"}
            />
          </div>

        </Section>
        <Section className="bg-red-600">
          <h2 className="text-4xl font-bold text-white">Section 2</h2>
        </Section>
        <Section className="bg-blue-500">
          <h2 className="text-4xl font-bold text-white">Section 3</h2>
        </Section>
      </div>
  );
}
