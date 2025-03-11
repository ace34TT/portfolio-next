"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/Section";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutMeSection } from "@/components/AboutMeSection";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const scrolling = useRef(false);

  const sections = [
    { title: "About" },
    { title: "Projects" },
    { title: "Contact" },
  ];

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    if (scrolling.current) return;

    scrolling.current = true;
    const direction = event.deltaY > 0 ? 1 : -1;
    const nextSection = Math.min(
      Math.max(currentSection + direction, 0),
      sections.length - 1,
    );

    if (nextSection !== currentSection) {
      setCurrentSection(nextSection);
    }

    setTimeout(() => {
      scrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      (container as HTMLDivElement).addEventListener("wheel", handleScroll, {
        passive: false,
      });
      return () =>
        (container as HTMLDivElement).removeEventListener(
          "wheel",
          handleScroll,
        );
    }
  }, [currentSection, handleScroll]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-hidden relative"
    >
      <div
        className="transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateY(-${currentSection * 100}%)` }}
      >
        <Section className="">
          <AboutMeSection />
        </Section>
        <Section className="">
          <ProjectsSection />
        </Section>
        <Section className="">
          <ContactSection />
        </Section>
      </div>

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSection === index ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
