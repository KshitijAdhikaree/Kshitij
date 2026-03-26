import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Kshitij | 404 - Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <AnimatedText
              text="404 - Page Not Found"
              className="!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl text-center"
            />
            <p className="my-4 text-base font-medium text-center">
              Sorry, the page you are looking for does not exist.
            </p>
            <Link
              href="/"
              className="mt-8 px-6 py-3 bg-dark text-light dark:bg-light dark:text-dark rounded-lg border-0 hover:bg-light hover:border hover:border-dark hover:text-dark dark:hover:bg-dark dark:hover:border dark:hover:border-light dark:hover:text-light hover:scale-105 transition-all duration-300"
            >
              Go Back Home
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
