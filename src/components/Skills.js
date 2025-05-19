import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFigma,
  SiTailwindcss,
  SiReact,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiRedux,
  SiTypescript,
  SiBootstrap,
  SiFirebase,
  SiGraphql,
  SiJquery,
  SiGit,
  SiGithub,
  SiPython,
  SiCplusplus,
  SiDocker,
  SiLinux,
} from "react-icons/si";

const Skill = ({ icon: Icon, name, x, y }) => {
  return (
    <motion.div
      className="group flex items-center justify-center rounded-full bg-dark text-light p-4 shadow-dark cursor-pointer absolute
      dark:bg-light dark:text-dark dark:shadow-light border border-light dark:border-dark lg:p-3 md:p-2 xs:p-1 text-3xl md:text-2xl sm:text-xl"
      whileHover={{ scale: 1.2, zIndex: 50 }} // bring to front
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      style={{ zIndex: 1 }} // default stacking
    >
      <div className="relative">
        <Icon />
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
          {name}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  // Split skills into 3 levels
  const levels = [
    {
      icons: [
        { icon: SiHtml5, name: "HTML5" },
        { icon: SiCss3, name: "CSS3" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
        { icon: SiFigma, name: "Figma" },
      ],
      radiusX: 12,
      radiusY: 6,
    },
    {
      icons: [
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiExpress, name: "Express" },
        { icon: SiMysql, name: "MySQL" },
        { icon: SiDotnet, name: ".NET" },
        { icon: SiPostgresql, name: "PostgreSQL" },
      ],
      radiusX: 20,
      radiusY: 10,
    },
    {
      icons: [
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiRedux, name: "Redux" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiBootstrap, name: "Bootstrap" },
        { icon: SiFirebase, name: "Firebase" },
        { icon: SiGraphql, name: "GraphQL" },
        { icon: SiJquery, name: "jQuery" },
        { icon: SiGit, name: "Git" },
        { icon: SiGithub, name: "GitHub" },
        { icon: SiPython, name: "Python" },
        { icon: SiCplusplus, name: "C++" },
        { icon: SiDocker, name: "Docker" },
        { icon: SiLinux, name: "Linux" },
      ],
      radiusX: 30,
      radiusY: 16,
    },
  ];

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center text-light p-8 cursor-pointer
    dark:text-dark lg:p-6 md:p-4 xs:p-2 text-6xl"
          whileHover={{
            scale: 1.8,
            rotate: 360,
            textShadow: "0px 0px 8px rgba(0, 0, 0, 1)",
          }}
          transition={{ type: "spring", stiffness: 40, damping: 10 }}
        >
          💻
        </motion.div>

        {levels.map((level, idx) =>
          level.icons.map(({ icon: Icon, name }, i) => {
            const angle = (360 / level.icons.length) * i;
            const rad = (angle * Math.PI) / 180;
            const x = `${Math.round(Math.cos(rad) * level.radiusX)}vw`;
            const y = `${Math.round(Math.sin(rad) * level.radiusY)}vw`;
            return (
              <Skill key={`${idx}-${i}`} icon={Icon} name={name} x={x} y={y} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Skills;
