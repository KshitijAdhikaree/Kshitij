import { motion } from 'framer-motion'
import React from 'react'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute
      dark:bg-light dark:text-dark dark:shadow-light dark:border dark:border-light lg:py-2 lg:px-4 md:text-sm md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:dark:border-hidden
      xs:text-dark xs:dark:text-light xs:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}
const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div
        className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm'
      >
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
          dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2  '
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name='HTML' x='-19vw' y='2vw' />
        <Skill name='CSS' x='-5vw' y='-10vw' />
        <Skill name='JavaScript' x='23vw' y='6vw' />
        <Skill name='NodeJS' x='-0vw' y='11vw' />
        <Skill name='MongoDB' x='-19vw' y='-15vw' />
        <Skill name='Express' x='15vw' y='-12vw' />
        <Skill name='NextJS' x='31vw' y='-5vw' />
        <Skill name='Figma' x='-20vw' y='14vw' />
        <Skill name='Tailwind CSS' x='22vw' y='18vw' />
        <Skill name='React' x='2vw' y='-18vw' />
      </div>
    </>
  )
}

export default Skills
