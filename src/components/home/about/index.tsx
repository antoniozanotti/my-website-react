import Section from "@/components/ui/section";
import Grid from "@/components/ui/grid";
import Code from "./code";

export default function Index() {
  return (
    <Section title="About" anchor="about">
      <Grid>
        <div className="flex flex-col space-y-4 mt-4">
          <p>
            Front-end developer with +15 years of experience, using technology to develop solutions. Searching for long-term opportunity to work as Frontend Developer.
          </p>
          <p>
            I am a friendly, observant, inquisitive and curious coworker who likes to listen and help people on the team. I value human diversity and believe that we cannot define ourselves. We create ourselves at every moment of our existence, between our choices and the limits of social coercion. Promoting a positive social impact through technology is one of my goals.
          </p>
          <p>
            Proficient in Vue, React, Next.js, Vite, Storybook, UnoCSS+Tailwind CSS, TypeScript, Redux, Pinia, GraphQL, Vitest, Jest… I’m open mind to study and adapt me to your Tech Stack.
          </p>
          <p>
            Besides work, I love my husband, we’ve been living together for 7 years. I also like to study sociology, do exercises at home, take a track, go to the beach, hangout with friends, watercolour, arduino...
          </p>
        </div>
        <div className="mt-4">
          <Code />
        </div>
      </Grid>
    </Section>
  );
}
