import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm text-justify">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-6">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-14 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[45px] xs:left-[26px] "
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            position="Freelancer Web Designer"
            company="Upwork and Fiverr"
            target="_blank"
            companyLink="https://www.upwork.com"
            time="2024 - Present"
            address="Remote"
            work="As a Freelancer Web Designer on Upwork and Fiverr, I have designed and developed custom websites for clients across various industries. I collaborate directly with clients to understand their needs, provide creative solutions, and deliver user-friendly, responsive websites. I use technologies such as HTML, CSS, JavaScript, and BootStrap to create visually appealing and functional designs, ensuring client satisfaction and repeat business."
          />
          <Details
            position="Mid-Level Software Engineer"
            company="Debugsoft Pvt. Ltd."
            target="_blank"
            companyLink="https://debugsoft.com"
            time="June 2024 - Sep 2024"
            address="Kupandole, Kathmandu, Nepal"
            work="As a Mid-Level Software Engineer at Debugsoft Pvt. Ltd., I was responsible for designing, developing, and maintaining software solutions. I contributed to full-stack web development projects using technologies like ASP.NET, JavaScript (React, Node.js), and SQL Server. I worked closely with senior engineers to implement scalable solutions, and provided support to junior team members in troubleshooting and optimizing applications."
          />
          <Details
            position="Junior Software Engineer"
            company="Debugsoft Pvt. Ltd."
            target="_blank"
            companyLink="https://debugsoft.com"
            time="Jan 2024 - June 2024"
            address="Kupandole, Kathmandu, Nepal"
            work="As a Junior Software Engineer, I mentor and guide new interns, helping them understand company processes and technologies. I assist senior engineers by troubleshooting issues and contributing to the development and maintenance of software solutions. I leverage my expertise in ASP.NET, React, Node.js, SQL Server, and Git to provide technical support and contribute to innovative projects."
          />
          <Details
            position="Associate Software Engineer"
            company="Debugsoft Pvt. Ltd."
            target="_blank"
            companyLink="https://debugsoft.com"
            time="Sept 2023 - Jan 2024"
            address="Kupandole, Kathmandu, Nepal"
            work="As an Associate Software Engineer, I performed code reviews and provided constructive feedback to peers to ensure high-quality code. I helped develop a payment processing platform, improving transaction speed by 15%. I also contributed to technical discussions to ensure project goals were aligned with technical standards."
          />
          <Details
            position="Intern Software Engineer"
            company="Debugsoft Pvt. Ltd."
            target="_blank"
            companyLink="https://debugsoft.com"
            time="June 2023 - Sept 2023"
            address="Kupandole, Kathmandu, Nepal"
            work="During my internship, I worked on iterating the platform for member management, collaborating with a team of engineers to develop new features. I also tested the software for bugs and optimized performance, increasing efficiency through bug fixes and process documentation."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
