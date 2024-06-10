import Section from "@/components/ui/section";
import Grid from "@/components/ui/grid";
import Code from "./code";

export default function Index() {
  return (
    <Section title="About" anchor="about">
      <Grid>
        <div className="flex flex-col space-y-4 mt-4">
          <p>
            I was born in Gramado, a small tourist city in the south of Brazil,
            today I live in the city of Florianópolis. I started my journey when
            I was 16 years old, in 2006. I have 18 years of experience in
            different types of projects: multinational ecommerce platform,
            social recipe network, real estate websites, hotel network…
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
            For most of my career, I worked as a Full Stack PHP developer. From
            2023 onwards, I returned to the frontend, as it is the area of
            software development that I most identify with. I’m not a ready
            professional, and I never will be, because I’ll always be learning
            something more. I don’t feel comfortable in a leadership position
            today, but it’s something I want to develop.
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
