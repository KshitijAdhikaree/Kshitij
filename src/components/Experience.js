import { useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] '
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
          md:w-[2px] md:left-[45px] xs:left-[26px] '
        />
        <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
          <Details
            position='Web Development'
            company='Broadway Infosys.'
            target='_blank'
            companyLink='https://broadwayinfosys.com/'
            time='2022-2023'
            address='Tinkune, Kathmandu'
            work='As a web developer, I design and develop websites and web applications, write code in languages such as HTML, CSS, and JavaScript,
             collaborate with team members, test for functionality and troubleshoot issues, and stay up-to-date with the latest technologies to deliver
              high-quality products to clients.'
          />
          <Details
            position='Computer Operator'
            company='Helen Keller International'
            target='_blank'
            companyLink='https://helenkellerintl.org/'
            time='2022-2022'
            address='Pulchowk, Kathmandu'
            work='As a Computer Operator at Helen Keller Intl, I provided technical support, troubleshooted hardware and software issues, and ensured data security
            . I collaborated with departments to identify technical needs and lead training sessions. I was committed to staying up to date with industry
             trends and providing excellent customer service.'
          />
          <Details
            position='Logistics Assistant'
            company='Department of Health Services (DoHS)'
            companyLink='https://dohs.gov.np/'
            time='2021-2022'
            address='Teku, Kathmandu'
            work='Provide administrative support in a logistics unit. Compiling reports, assisting with creating
            presentations with co-workers, and organizing and maintaining records. Supervise incoming
            shipment to ensure that they are intact and accurate. Supervise and partake in loading/unloading
            trucks when shipments are received or going out.'
          />
          <Details
            position='Content Writer'
            company='Entegra Sources'
            companyLink='https://entegrasources.com/'
            time='2021-2021'
            address='New Baneshower, Kathmandu'
            work='As a content writer, I create written content for various mediums, conduct research, develop ideas, collaborate with designers, and revise and proofread content. 
            I stay up-to-date with trends and best practices to deliver engaging, informative, and optimized copy.'
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
