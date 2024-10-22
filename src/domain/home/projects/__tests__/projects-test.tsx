import { screen, render } from "@/lib/test";
import { Projects } from "../projects";
import { ProjectsMocks } from './projects-mocks';

describe("Projects", () => {
  it("should render section", async () => {
    render(<Projects projects={ProjectsMocks.projects} />);
    const title = screen.getByRole("heading", {name: "Projects"});
    
    expect(title).toBeVisible();
  });
});
