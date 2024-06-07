import Header from "@/components/home/header";
import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import Projects from "@/components/home/projects";
import Footer from "@/components/home/footer";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";

const HOME_QUERY = gql`
  query Query {
    pageCollection(limit: 1, where: { title: "Home" }) {
      items {
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

export default async function Home() {
  const { data } = await getClient().query({ query: HOME_QUERY });
  return (
    <div className="pb-4 sm:pb-8 lg:pb-16 px-4 sm:px-8 lg:px-16 lg:w-[896px] xl:w-[1152px] lg:mx-auto">
      <Header />
      <main>
        <About />
        <Projects projects={data.pageCollection.items[0].projectsCollection.items} />
        <Experience positions={data.pageCollection.items[0].positionsCollection.items} />
      </main>
      <Footer />
    </div>
  );
}
