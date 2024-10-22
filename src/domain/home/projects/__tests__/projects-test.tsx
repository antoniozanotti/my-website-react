import { screen, render } from "@/lib/test";
import { Projects } from "../projects";
import { ProjectsMocks } from './projects-mocks';

describe("Projects", () => {
  it("should render section", async () => {
    const { container } = render(<Projects projects={ProjectsMocks.projects} />);
    const title = screen.getByRole("heading", {name: "Projects"});
    
    expect(title).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
