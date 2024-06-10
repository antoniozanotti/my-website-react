import Section from "@/components/ui/section";
import Grid from "@/components/ui/grid";
import Code from "./code";

export default function Index() {
  return (
    <Section title="About" anchor="about">
      <Grid>
        <div className="flex flex-col space-y-4 mt-4">
          <p>
            Front-end developer with +15 years of experience, using technology
            to develop solutions. I was born in Gramado, a small, touristic city
            in the countryside of south of Brazil. Today I live in Florianópolis
            city. I started my journey when I was 16 years old in 2006. I have
            18 years of experience in different types of projects: multinational
            ecommerce platform, social recipe network, real estate websites,
            hotel network…
          </p>

          <p>
            I have experience with Vue, React, Next.js, Vite, TypeScript,
            TanStack Query, Axios, Storybook, UnoCSS + Tailwind CSS, Redux,
            Pinia, GraphQL, Vitest, Jest, Playwright, which are the most used
            technologies currently for frontend. I also have experience with
            PHP, Magento, CakePHP, Zend Framework, Data Modeling, SQL, MySQL,
            PostgreSQL, PL/pgSQL. I’m very experienced with Figma, HTML, CSS and
            JavaScript.
          </p>

          <p>
            Most of the time, I worked as a Full Stack PHP developer, from 2023
            I started specializing in frontend, as it is the area of ​​software
            development that I enjoy most. I’m not a ready-made professional,
            and I never will be, because I’ll always want to learn something
            more. I don’t feel comfortable in a leadership position today, but
            it’s something I’m thinking about for the future. Technology has
            never been a barrier for me, in fact I adapt very well and quickly.
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
