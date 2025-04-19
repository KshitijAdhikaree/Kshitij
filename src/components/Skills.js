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

const Skill = ({ icon: Icon, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-dark text-light p-4 shadow-dark cursor-pointer absolute
      dark:bg-light dark:text-dark dark:shadow-light border border-light dark:border-dark lg:p-3 md:p-2 xs:p-1 text-3xl md:text-2xl sm:text-xl"
      whileHover={{ scale: 1.2 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <Icon />
    </motion.div>
  );
};

const Skills = () => {
  // Split skills into 3 levels
  const levels = [
    {
      icons: [SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiFigma],
      radiusX: 12,
      radiusY: 6,
    },
    {
      icons: [
        SiNodedotjs,
        SiMongodb,
        SiExpress,
        SiMysql,
        SiDotnet,
        SiPostgresql,
      ],
      radiusX: 20,
      radiusY: 10,
    },
    {
      icons: [
        SiNextdotjs,
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
          className="flex items-center justify-center rounded-full bg-dark text-light p-8 shadow-dark cursor-pointer
          dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:p-2 text-4xl"
          whileHover={{ scale: 1.2 }}
        >
          💻
        </motion.div>

        {levels.map((level, idx) =>
          level.icons.map((Icon, i) => {
            const angle = (360 / level.icons.length) * i;
            const rad = (angle * Math.PI) / 180;
            const x = `${Math.round(Math.cos(rad) * level.radiusX)}vw`;
            const y = `${Math.round(Math.sin(rad) * level.radiusY)}vw`;
            return <Skill key={`${idx}-${i}`} icon={Icon} x={x} y={y} />;
          })
        )}
      </div>
    </>
  );
};

export default Skills;
