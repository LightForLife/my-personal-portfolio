import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import logo from "@/public/logo.png";
import { PageInfo } from "@/typings";
import { Experience } from "@/typings";
import { Skill } from "@/typings";
import { Project } from "@/typings";
import { Social } from "@/typings";
// import { fetchPageInfo } from "@/utills/fetchPageInfo";
import { fetchExperiences } from "@/utills/fetchExperiences";
import { fetchSkills } from "@/utills/fetchSkills";
import { fetchProjects } from "@/utills/fetchProjects";
import { fetchSocials } from "@/utills/fetchSocials";
import { loadInfo } from "./api/getPageInfo";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen scroll-smooth snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
    scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>{pageInfo.name}</title>
      </Head>
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* Footer */}

      <footer className="sticky bottom-5">
        <div className="flex items-center justify-center ">
          <Link href="#hero">
            <Image
              src={logo}
              width={600}
              height={600}
              alt="Button to top"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer hover:scale-105 duration-200"
            ></Image>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const pageInfo: PageInfo = await loadInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: { pageInfo, experiences, skills, projects, socials },
    revalidate: 10,
  };
}
