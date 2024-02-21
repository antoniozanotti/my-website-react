import Section from "@/components/ui/section";
import Grid from "@/components/ui/grid";
import Code from "@/components/blocks/code";
import AntonioZanottiImg from "@images/antonio_zanotti.jpg"

export default function About() {
  return (
    <Section title="# About">
      <Grid>
        <div className="mb-4 sm:order-last">
          <img
            src={AntonioZanottiImg.src}
            alt="Antônio Zanotti"
            className="rounded sm:rounded-full"
          />
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
            I'm friendly coworker, easy going, observant, curious and I like to help and listen. My place is between backend developers and designers.
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
