import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import chatGpt from '../../public/images/projects/chatGpt.jpg'
import musicPlayer from '../../public/images/projects/musicPlayer.jpg'
import quoteGenerator from '../../public/images/projects/quoteGenerator.jpg'
import justKidding from '../../public/images/projects/justKidding.jpg'
import eShop from '../../public/images/projects/eShop.jpg'
import picToPic from '../../public/images/projects/picToPic.jpg'

import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10 relative rounded-br-2xl
    dark:border dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
      dark:bg-light xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'
      />

      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline hover:underline-offset-2'
        >
          <h2 className='my-2 w-full text-dark text-left text-4xl font-bold dark:text-light sm:text-sm '>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>
          {summary}
        </p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-2 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base '
          >
            Vist Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
     bg-light p-6 relative dark:border dark:border-light dark:bg-dark xs:p-4'
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl
       dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'
      />

      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base '>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline hover:underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>
            {title}
          </h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-center'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline mr-8 md:text-base '
          >
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 ml-8 md:w-6'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}
const projects = () => {
  return (
    <>
      <Head>
        <title>Kshitij | Projects</title>
        <meta name='description' content='description' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Knowledge Altogether'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
            <div className='col-span-12'>
              <FeaturedProject
                title='Chat Gpt'
                img={chatGpt}
                summary='A clone of chat gpt which lets you choose engine '
                link='https://kshitijadhikaree.github.io/chatGpt/'
                github='https://github.com/KshitijAdhikaree/chatGpt'
                type='React Website'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Music Player'
                img={musicPlayer}
                summary='A simple music player app that lets you change song, fast forward and play-pause features. '
                link='https://kshitijadhikaree.github.io/music-player/'
                github='https://github.com/KshitijAdhikaree/music-player'
                type='HTML / CSS'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Just Kidding'
                img={justKidding}
                summary='A webpage that contains button and when clicked it calls joke api that converts text to audio and tells random joke'
                link='https://kshitijadhikaree.github.io/Just-kidding/'
                github='https://github.com/KshitijAdhikaree/Just-kidding'
                type='HTML/ CSS'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='E-shop'
                img={eShop}
                summary='A ecommerce website that uses crud operation with dashboard and payment method.'
                link='/'
                github='/'
                type='E-commerce Website'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Quote Generator'
                img={quoteGenerator}
                summary='A simple website that calls quote api that displays random quote with author. It also contains button to\
                get next quote and twitter button to directly share to twitter'
                link='https://kshitijadhikaree.github.io/quote_generator/'
                github='https://github.com/KshitijAdhikaree/quote_generator'
                type='HTML / CSS'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Picture in picture'
                img={picToPic}
                summary='A website that lets user to minimize in small window anything that is playing on browser. It is created by
                HTML and CSS'
                link='https://kshitijadhikaree.github.io/picture-in-picture/'
                github='https://github.com/KshitijAdhikaree/picture-in-picture'
                type='HTML /CSS'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
