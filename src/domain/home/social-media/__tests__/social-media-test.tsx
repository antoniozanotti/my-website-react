import { screen, render, firstComponent, fireEvent } from "@/lib/test";
import { SocialMedia } from "../social-media";
import { beforeAll } from "@jest/globals";

describe("SocialMedia", () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = render(<SocialMedia />).container;
  });

  it("should render elements", async () => {
    const component = firstComponent(screen);

    expect(component).toBeVisible();
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(container).toMatchSnapshot();
  });

  it("should allow click on links", async () => {
    const linkedIn = screen.getByText("Linked In");
    const gitHub = screen.getByText("GitHub");

    expect(linkedIn).toHaveAttribute("href", "https://www.linkedin.com/in/antoniozanotti/");
    expect(linkedIn).toHaveAttribute("target", "_blank");

    expect(gitHub).toHaveAttribute("href", "https://github.com/antoniozanotti");
    expect(gitHub).toHaveAttribute("target", "_blank");
    expect(container).toMatchSnapshot();
  });
});
