import Section from "@/components/ui/section";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";
import PositionsList from "./positions-list";

const POSITION_GET_ALL_QUERY = gql`
  query Query {
    pageCollection(limit:1) {
      items {
        positionsCollection(limit:20) {
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
            skillsCollection(limit:40) {
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

export default async function Index() {
  const { data } = await getClient().query({ query: POSITION_GET_ALL_QUERY });
  return (
    <Section title="Experience">
      <PositionsList positions={data.pageCollection.items[0].positionsCollection.items} />
    </Section>
  );
}
