import Section from "@/components/ui/section";
import Grid from "@/components/ui/grid";
import Code from "./code";

export default function Index() {
  return (
    <Section title="About" anchor="about">
      <Grid>
        <div className="flex flex-col space-y-4 mt-4">
          <p>
            Front-end developer with +15 years of experience using technology to
            develop solutions. Looking for long-term opportunity to work as
            Frontend Developer.
          </p>
          <p>
            Proficient in Vue and React, Next.js and Vite, Storybook,
            UnoCSS+Tailwind CSS, TypeScript, Redux and Pinia, GraphQL, Vitest,
            Jest… I’m open mind to study and adapt me to your Tech Stack.
          </p>
          <p>
            I am a friendly, observant, curious co-worker who likes to listen
            and help everyone on the team.
          </p>
          <p>
            Besides work, I love my husband, we’ve been living together for 7
            years. I also like to study sociology, do exercises at home, take a
            track, go to the beach, hangout with friends, watercolour,
            arduino...
          </p>
        </div>
        <div className="mt-4">
          <Code />
        </div>
      </Grid>
    </Section>
  );
}
