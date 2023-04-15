import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profile1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

function Home() {
  return (
    <>
      <Head>
        <title>Kshitij | Home </title>
        <meta name='description' content='description' />
      </Head>
      <TransitionEffect />

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-2'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 lg:w-full md:w-full'>
              <div
                className='w-[420px] h-[490px] bg-primaryDark dark:bg-primary border-[12px] border-dark transition-[border-radius] duration-[0.5s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-[10px] 
              shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]
              dark:shadow-[inset_0_-3em_3em_rgba(255,255,255,0.1),0_0_0_2px_rgb(53,53,53),0.3em_0.3em_1em_rgba(255,255,255,0.3)]
              mt-24 md:w-[20rem] md:h-[341px] md:mt-16 md:ml-[72px] sm:ml-20 xs:ml-8 lg:ml-[160px] sm:mt-32 mb-4 dark:border-light xs:w-[14rem] xs:h-[14rem]
              '
              >
                <Image
                  src={profilePic}
                  alt='profilePic'
                  width={400}
                  height={400}
                  priority={true}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                  className='-mt-32 lg:inline-block md:inline-block md:w-[24rem] sm:w-[20rem] xs:w-[14rem] xs:-mt-[100px]'
                />
              </div>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text='Bringing ideas to life with programming and design.'
                className='xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs text-justify xs:text-base '>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in web design and
                development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='/Resume.pdf'
                  target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  dark:text-dark dark:bg-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base'
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=adhikareekshitij@gmail.com&subject=Unable%20to%20reach%20you&body=Hello%2C%0A%0AI%20tried%20contacting%20you%20today%20but%20you%20seem%20to%20have%20missed%20my%20call.%20%0A%0APlease%20return%20my%20call%20as%20soon%20as%20you%E2%80%99re%20available.%20%0A%0AIn%20any%20case%2C%20I%20will%20try%20ringing%20you%20at%20a%20later%20time.%0A%0A%0ATy%2C%0A%0A%0A%0A'
                  target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}

export default Home
