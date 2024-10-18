import { Header } from "@/domain/layout/header/header";
import { Footer } from "@/domain/layout/footer/footer";
import { About } from "../about/about";
import { Experience } from "../experience/experience";
import { Projects } from "../projects/projects";
import { HomeInterface } from "./home-interface";

export function Home({ aboutParagraphs, projects, positions }: HomeInterface) {
  return (
    <div className="pb-4 sm:pb-8 lg:pb-16 px-4 sm:px-8 lg:px-16 lg:w-[896px] xl:w-[1152px] lg:mx-auto">
      <Header />
      <main>
        <About paragraphs={aboutParagraphs} />
        <Projects projects={projects} />
        <Experience positions={positions} />
      </main>
      <Footer />
    </div>
  );
}
