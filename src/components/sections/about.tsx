import Section from "@/components/ui/section";
import Grid from "@/components/ui/grid";
import Code from "@/components/blocks/code";
import ImgProfileXl from "@images/antonio-zanotti-profile-xl.jpg"
import ImgProfileLg from "@images/antonio-zanotti-profile-lg.jpg"
import ImgProfileSm from "@images/antonio-zanotti-profile-sm.jpg"
import ImgProfileDefault from "@images/antonio-zanotti-profile-default.jpg"

export default function About() {
  return (
    <Section title="# About">
      <Grid>
        <div className="mb-4 sm:order-last text-center">
          <picture className="rounded sm:rounded-full sm:aspect-square inline-block overflow-hidden">
            <source media="(min-width: 1280px)" srcSet={ImgProfileXl.src} />
            <source media="(min-width: 1024px)" srcSet={ImgProfileLg.src} />
            <source media="(min-width: 640px)" srcSet={ImgProfileSm.src} />
            <img src={ImgProfileDefault.src} alt="Antônio Zanotti's profile photo" />
          </picture>
        </div>
        <div className="flex flex-col space-y-4">
          <p>
            Senior Full Stack Developer with more than 15 years of experience.
            Looking for long-term opportunities to work as Frontend Developer.
          </p>
          <p>
            Comfortable with Vue or React, Next.js or Vite, Storybook,
            UnoCSS+Tailwind CSS, TypeScript, GraphQL… I’m open mind to study and
            adapt me to your Tech Stack.
          </p>
          <p>
            I’m friendly coworker, easy going, observant, curious and I like to help and listen. My place is between backend developers and designers.
          </p>
          <p>
            Besides work, I love my husband, we’ve been living together for 7
            years. I also like to study sociology, do exercises at home, take a
            track, go to the beach, hangout with friends, watercolour, arduino...
          </p>
          <Code />
        </div>
      </Grid>
    </Section>
  );
}
