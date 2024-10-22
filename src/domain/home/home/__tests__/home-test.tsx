import { screen, render, firstComponent } from "@/lib/test";

import { Home } from "../home";
import { HomeMocks } from "./home-mocks";

describe("Home", () => {
  it("should render home", async () => {
    const { container } = render(
      <Home
        aboutParagraphs={HomeMocks.aboutParagraphs}
        projects={HomeMocks.projects}
        positions={HomeMocks.positions}
      />
    );
    expect(container).toHaveTextContent(HomeMocks.aboutParagraphs[0]);
    expect(container).toHaveTextContent(HomeMocks.projects[0].title);
    expect(container).toHaveTextContent(HomeMocks.positions[0].title);
  });
});
