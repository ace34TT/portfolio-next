import React from "react";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`snap-start h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};
