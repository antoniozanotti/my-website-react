import { ExperienceInterface } from "@/domain/home/experience/experience-interface";

export const ExperienceMocks: ExperienceInterface = {
  positions: [
    {
      __typename: "Position",
      title: "Full Stack Developer",
      company: "MAD Design Group",
      location: "Sydney, New South Wales, Australia",
      period: "Jul 2015 - Dec 2023",
      visibleInShortVersion: true,
      achievements: {
        __typename: "PositionAchievements",
        json: {
          data: {},
          content: [
            {
              data: {},
              nodeType: "paragraph",
            },
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "In 2023, I designed the transition to the JAMstack architecture, which will gradually replace the Magento platform by APIs. This migration will result in significant gains in application performance, and will provide greater independence for content managers. For this, I created a system using Vue, Vite, Pinia, Typescript, UNOCSS+Tailwind CSS, Storybook, urql for team collaborative development. I proposed improvements to data modeling in Hygraph (GraphQL Headless CMS), to improve performance and maintain the platform's flexibility.",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
          ],
          nodeType: "document",
        },
      },
      links: {
        __typename: "PositionLinks",
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: "",
                          nodeType: "text",
                        },
                        {
                          data: { uri: "https://ecosmartfire.com/" },
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: "EcoSmart Fire (United States)",
                              nodeType: "text",
                            },
                          ],
                          nodeType: "hyperlink",
                        },
                        {
                          data: {},
                          marks: [],
                          value: "",
                          nodeType: "text",
                        },
                      ],
                      nodeType: "paragraph",
                    },
                  ],
                  nodeType: "list-item",
                },
              ],
              nodeType: "unordered-list",
            },
          ],
          nodeType: "document",
        },
      },
      skillsCollection: {
        __typename: "PositionSkillsCollection",
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
