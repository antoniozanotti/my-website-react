import { ProjectsInterface } from "@/domain/home/projects/projects-interface";

export const ProjectsMocks: ProjectsInterface = {
  projects: [
    {
      __typename: "Project",
      title: "Emmanuel's Book Store",
      company: null,
      period: "Apr 2024 - Present",
      visibleInShortVersion: true,
      achievements: {
        __typename: "ProjectAchievements",
        json: {
          nodeType: "document",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [
                {
                  nodeType: "text",
                  value:
                    "React ecommerce for portfolio purposes, my biggest project created from scratch with Next.js to show what I can do. I highlight the search and shopping cart features.",
                  marks: [],
                  data: {},
                },
              ],
            },
          ],
        },
      },
      skillsCollection: {
        __typename: "ProjectSkillsCollection",
        items: [
          { __typename: "Skill", title: "Front-End Development" },
          { __typename: "Skill", title: "Software Architecture" },
          { __typename: "Skill", title: "React" },
          { __typename: "Skill", title: "Next.js" },
          { __typename: "Skill", title: "Node.js" },
          { __typename: "Skill", title: "TypeScript" },
          { __typename: "Skill", title: "JavaScript" },
          { __typename: "Skill", title: "TanStack Query" },
          { __typename: "Skill", title: "Axios" },
          { __typename: "Skill", title: "Test Automation" },
          { __typename: "Skill", title: "Playwright" },
          { __typename: "Skill", title: "Regex" },
          { __typename: "Skill", title: "Data Modeling" },
          { __typename: "Skill", title: "PostgreSQL" },
          { __typename: "Skill", title: "Prisma" },
          { __typename: "Skill", title: "SQL" },
          { __typename: "Skill", title: "HTML" },
          { __typename: "Skill", title: "Tailwind CSS" },
          { __typename: "Skill", title: "CSS" },
          { __typename: "Skill", title: "NextUI" },
          { __typename: "Skill", title: "SEO" },
          { __typename: "Skill", title: "Software Development" },
          { __typename: "Skill", title: "Documentation" },
          { __typename: "Skill", title: "Faker.js" },
          { __typename: "Skill", title: "Git" },
          { __typename: "Skill", title: "npm" },
        ],
      },
    },
  ],
};
