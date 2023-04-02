import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import pagination from '../../public/images/articles/pagination.png'
import jwtAuth from '../../public/images/articles/jwtAuth.png'
import { motion, useMotionValue } from 'framer-motion'
import progressiveWeb from '../../public/images/articles/progressiveWeb.jpg'
import stripePay from '../../public/images/articles/stripePay.png'
import TransitionEffect from '@/components/TransitionEffect'
import advancedCSS from '../../public/images/articles/advancedCSS.jpg'
import crud from '../../public/images/articles/crud.jpg'
import formValidation from '../../public/images/articles/formValidation.jpg'

const FramerImage = motion(Image)

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block'
    x.set(event.pageX)
    y.set(-10)
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }
  return (
    <Link
      href={link}
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        as='image'
        ref={imgRef}
        src={img}
        alt={title}
        className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
        priority
        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
      />
    </Link>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className='realtive w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col '
    >
      <MovingImage title={title} img={img} link={link} as='image' />
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link
        href={link}
        target='_blank'
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg '
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-auto h-full'
          as='image'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>
          {title}
        </h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>
        {time}
      </span>
    </li>
  )
}
const articles = () => {
  return (
    <>
      <Head>
        <title>Kshitij | Articles</title>
        <meta name='description' content='description' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='-mt-10'>
          <AnimatedText
            text='Words can change the world'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
            <FeaturedArticle
              title='Custom Pagination Component In Reactjs '
              img={pagination}
              time='20-30 minutes'
              summary='In this tutorial, we will be building a custom pagination component in React from scratch. 
              Pagination is an essential component in modern web applications that allows users to navigate through large 
              sets of data. We will be using React hooks and CSS to create a reusable pagination component that can be easily 
              integrated into any project.'
              link='https://www.example.com/build-custom-pagination-component-react/'
            />
            <FeaturedArticle
              title='Form Validation'
              img={formValidation}
              time='25-30 minutes'
              summary='Form validation is an important part of building a user-friendly and secure web application. 
              In this tutorial, we will explore various methods for validating form data in React. 
              We will cover basic input validation, form-wide validation, and asynchronous validation using third-party libraries. 
              By the end of this tutorial, you will have a solid understanding of how to implement form validation in your React projects.'
              link='/'
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>
            All articles
          </h2>
          <ul>
            <Article
              title='Building a CRUD Application with React and Firebase'
              date='15 April 2023'
              link='https://www.example.com/build-custom-pagination-component-react/'
              img={crud}
            />
            <Article
              title='Advanced CSS Techniques for Responsive Web Design'
              date='20 September 2022'
              link='https://www.example.com/build-custom-pagination-component-react/'
              img={advancedCSS}
            />
            <Article
              title='Integrating Stripe Payments into Your React Application'
              date='20 March 2023'
              link='https://www.example.com/build-custom-pagination-component-react/'
              img={stripePay}
            />
            <Article
              title='Building a Progressive Web Application with React '
              date='10 January 2023'
              link='https://www.example.com/build-custom-pagination-component-react/'
              img={progressiveWeb}
            />
            <Article
              title='Authentication and Authorization with React and JWT'
              date='15 June 2023'
              link='https://www.example.com/build-custom-pagination-component-react/'
              img={jwtAuth}
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles
