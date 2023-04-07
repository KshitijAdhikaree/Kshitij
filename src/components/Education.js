import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {type}&nbsp;{' '}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='font-medium w-full md:text-sm text-justify'>{info}</p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
    layoutEffect: false,
  })
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Education
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-14 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[45px] xs:left-[26px]'
        />
        <ul className='w-full flex flex-col items-center justify-between ml-4'>
          <Details
            type='Bachelors'
            time='2016-2022'
            place='Balkumari, Kathmandu'
            info='Electronics and Communication Engineering (BEX) is a field of engineering focused on electronic devices and communication systems. 
            It involves designing, developing, and maintaining systems like radio, television, cellular networks, and satellite communications. 
            BEX graduates have a variety of career opportunities, including working in telecommunication companies, research labs, government agencies, 
            and academic institutions. The field of BEX is constantly evolving, requiring professionals to possess strong analytical and problem-solving skills 
            and stay up-to-date with the latest technological developments.'
          />
          <Details
            type='High-School'
            time='2014-2016'
            place='Kathmandu, Nepal'
            info='During my high school years, I was part of the science major program which was focused on teaching students about various scientific fields.
             The program was challenging but rewarding, providing me with a deep understanding of scientific principles and practices. 
             I had the opportunity to conduct laboratory experiments, participate in science fairs, and attend science-related events. 
             Although it was demanding, with the support of my teachers and fellow students, I overcame challenges and succeeded in the program. 
             Overall, it prepared me well for college-level science courses and a career in the scientific field.'
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
