import Header from "@/components/home/header";
import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import Projects from "@/components/home/projects";
import Footer from "@/components/home/footer";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";
import { unstable_setRequestLocale } from "next-intl/server";

const HOME_QUERY = gql`
  query Query($locale: String!) {
    pageCollection(limit: 1, where: { title: "Home" }, locale: $locale) {
      items {
        about {
          json
        }
        positionsCollection(limit: 20) {
          items {
            title
            company
            location
            period
            visibleInShortVersion
            achievements {
              json
            }
            links {
              json
            }
            skillsCollection(limit: 40) {
              items {
                title
              }
            }
          }
        }
        projectsCollection(limit: 20) {
          items {
            title
            company
            period
            visibleInShortVersion
            achievements {
              json
            }
            links {
              json
            }
            skillsCollection(limit: 40) {
              items {
                title
              }
            }
          }
        }
      }
    }
  }
`;

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const { data } = await getClient().query({
    query: HOME_QUERY,
    variables: {
      locale: locale === "en" ? "en-US" : "pt-BR",
    },
  });
  return (
    <div className="pb-4 sm:pb-8 lg:pb-16 px-4 sm:px-8 lg:px-16 lg:w-[896px] xl:w-[1152px] lg:mx-auto">
      <Header />
      <main>
        <About text={data.pageCollection.items[0].about} />
        <Projects
          projects={data.pageCollection.items[0].projectsCollection.items}
        />
        <Experience
          positions={data.pageCollection.items[0].positionsCollection.items}
        />
      </main>
      <Footer />
    </div>
  );
}
