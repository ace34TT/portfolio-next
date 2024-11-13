"use client";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState({
    row: 0,
    col: 0,
  });
  const projects = [
    {
      properties: {
        className: "ml-40",
      },
      items: [
        {
          title: "Project 1",
          imageUrl:
            "https://images.unsplash.com/photo-1730825447957-028c9e2efeba?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            " Lorem ipsum dolor sit\n" +
            "          amet, consectetur adipisicing elit. Ad aliquam doloremque ducimus ea\n" +
            "          fuga hic illo illum itaque laboriosam maxime nobis non optio pariatur\n" +
            "          perferendis quasi, quo, tenetur velit voluptatum!",
        },
      ],
    },
    {
      properties: { className: "ml-0" },
      items: [
        {},
        {
          title: "Project 2",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1728244258402-154a1c86c187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam\n" +
            "          asperiores aspernatur consequuntur debitis delectus dolorum expedita\n" +
            "          fugiat harum iste, iusto magni, officia, placeat quasi quis recusandae\n" +
            "          similique temporibus voluptatem voluptatum.",
        },
      ],
    },
    {
      properties: { className: "-ml-5" },
      items: [
        {
          title: "Project 3",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1728244258402-154a1c86c187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            " Lorem ipsum dolor sit\n" +
            "          amet, consectetur adipisicing elit. Ad aliquam doloremque ducimus ea\n" +
            "          fuga hic illo illum itaque laboriosam maxime nobis non optio pariatur\n" +
            "          perferendis quasi, quo, tenetur velit voluptatum!",
        },
        {
          title: "Project 4",
          imageUrl:
            "https://images.unsplash.com/photo-1730825447957-028c9e2efeba?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            " Lorem ipsum dolor sit\n" +
            "          amet, consectetur adipisicing elit. Ad aliquam doloremque ducimus ea\n" +
            "          fuga hic illo illum itaque laboriosam maxime nobis non optio pariatur\n" +
            "          perferendis quasi, quo, tenetur velit voluptatum!",
        },
        {
          title: "Project 5",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1728244258402-154a1c86c187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            " Lorem ipsum dolor sit\n" +
            "          amet, consectetur adipisicing elit. Ad aliquam doloremque ducimus ea\n" +
            "          fuga hic illo illum itaque laboriosam maxime nobis non optio pariatur\n" +
            "          perferendis quasi, quo, tenetur velit voluptatum!",
        },
      ],
    },
    {
      properties: { className: "ml-24" },
      items: [
        {
          title: "Project 6",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1728244258402-154a1c86c187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            " Lorem ipsum dolor sit\n" +
            "          amet, consectetur adipisicing elit. Ad aliquam doloremque ducimus ea\n" +
            "          fuga hic illo illum itaque laboriosam maxime nobis non optio pariatur\n" +
            "          perferendis quasi, quo, tenetur velit voluptatum!",
        },
        {
          title: "Project 7",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1728244258402-154a1c86c187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            " Lorem ipsum dolor sit\n" +
            "          amet, consectetur adipisicing elit. Ad aliquam doloremque ducimus ea\n" +
            "          fuga hic illo illum itaque laboriosam maxime nobis non optio pariatur\n" +
            "          perferendis quasi, quo, tenetur velit voluptatum!",
        },
      ],
    },
    {
      properties: { className: "ml-0" },
      items: [
        {
          title: "Project 8",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1728244258402-154a1c86c187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            " Lorem ipsum dolor sit\n" +
            "          amet, consectetur adipisicing elit. Ad aliquam doloremque ducimus ea\n" +
            "          fuga hic illo illum itaque laboriosam maxime nobis non optio pariatur\n" +
            "          perferendis quasi, quo, tenetur velit voluptatum!",
        },
        {},
      ],
    },
  ];
  return (
    <div className={"h-screen w-screen flex"}>
      <div className={"flex-1 h-full flex items-center"}>
        <div className={"h-fit my-auto"}>
          {projects.map((rows, index) => (
            <div
              className={"flex gap-2 mt-2 " + rows.properties.className}
              key={"row_" + index}
            >
              {rows.items.map((project, colIndex) => (
                <div
                  className={`
                        w-52 h-28 bg-foreground cursor-pointer grayscale border-secondary border-4 
                        hover:grayscale-0 transition-all duration-500 
                        ${activeProject.row === index && activeProject.col === colIndex ? "grayscale-0" : ""}
                    `}
                  key={"block_" + colIndex}
                  onClick={() => {
                    if (!project.title) return;
                    setActiveProject({
                      row: index,
                      col: colIndex,
                    });
                  }}
                >
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt=""
                      className={"w-full h-full object-cover"}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <motion.div
        className={"flex-1 h-full flex flex-col justify-center gap-5"}
        key={`${activeProject.row}-${activeProject.col}`}
        initial={{ opacity: 0, marginTop: "-20px" }}
        animate={{ opacity: 1, marginTop: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className={"w-full h-72 overflow-hidden"}>
          <img
            src={projects[activeProject.row].items[activeProject.col].imageUrl}
            alt=""
            className={"w-full h-auto object-center"}
          />
        </div>
        <h2 className={"text-4xl"}>
          {projects[activeProject.row].items[activeProject.col].title}
        </h2>
        <p className={"text-justify"}>
          {projects[activeProject.row].items[activeProject.col].description}
        </p>
        <Link
          href={"#"}
          className={
            "font-bold underline flex items-center hover:text-complementary transition-all duration-100"
          }
        >
          Visit website <GoArrowUpRight size={20} />
        </Link>
      </motion.div>
    </div>
  );
};
