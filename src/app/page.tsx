import Header from "@/components/home/header";
import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import Projects from "@/components/home/projects";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="pb-4 sm:pb-8 lg:pb-16 px-4 sm:px-8 lg:px-0 lg:px-16 lg:w-[896px] xl:w-[1152px] lg:mx-auto">
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
