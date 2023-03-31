import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            target='_blank'
            className='text-primary capitalize dark:text-primaryDark'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm text-justify'>{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
    layoutEffect: false,
  })
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-6'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-14 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[45px] xs:left-[20px] '
        />
        <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
          <Details
            position='Web Developer'
            company='Broadway Infosys.'
            target='_blank'
            companyLink='https://www.google.com/'
            time='2022-Present'
            address='Tinkune, Kathmandu'
            work='As a web developer, I design and develop websites and web applications, write code in languages such as HTML, CSS, and JavaScript,
             collaborate with team members, test for functionality and troubleshoot issues, and stay up-to-date with the latest technologies to deliver
              high-quality products to clients.'
          />
          <Details
            position='Content Writer'
            company='Entegra Sources'
            companyLink='https://www.google.com/'
            time='2022-2022'
            address='Mountain View, CA'
            work='As a content writer, I create written content for various mediums, conduct research, develop ideas, collaborate with designers, and revise and proofread content. 
            I stay up-to-date with trends and best practices to deliver engaging, informative, and optimized copy.'
          />
          <Details
            position='Computer engineer'
            company='DoHS'
            companyLink='https://www.google.com/'
            time='2021-2022'
            address='Teku, Kathmandu'
            work='As a computer engineer, I design and develop hardware and software systems, write code in languages such as C++, Python, and Java, and collaborate with other engineers to ensure system performance and functionality.
             I also test and troubleshoot systems to ensure they meet design specifications.'
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
