import Hero from "@/components/home/Hero";
import Expertise from "@/components/home/Expertise";
import AboutMe from "@/components/home/AboutMe";
import Head from "next/head";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Blogs";
import ContactMe from "@/components/home/ContactMe";
import Blogs from "@/components/home/Blogs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kishor Kunal| Personal Portfolio</title>
        <meta
          name="description"
          content="This is the personal portfolio website of kishor kunal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Expertise />
      <AboutMe />
      <Portfolio />
      <Blogs />
      <ContactMe />
    </>
  );
}
