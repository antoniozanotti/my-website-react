"use client";
import Header from "@/components/sections/header";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Footer from "@/components/sections/footer";

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
