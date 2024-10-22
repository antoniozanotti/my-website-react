import { screen, render, firstComponent } from "@/lib/test";
import { ArticleLinks } from "../article-links";

describe("ArticleLinks", () => {
  it("should not render component", async () => {
    render(<ArticleLinks />);
    const component = firstComponent(screen);
    expect(component).not.toBeInTheDocument();
  });

  it("should render ul, li, a", async () => {
    render(
      <ArticleLinks
        links={[
          { link: "https://www.google.com/", label: "Google" },
          { link: "https://www.linkedin.com/", label: "LinkedIn" },
        ]}
      />
    );
    
    const ul = screen.getByRole("list");
    const lis = screen.getAllByRole("listitem");
    const links = screen.getAllByRole("link");
    
    expect(ul).toBeVisible();
    expect(lis).toHaveLength(2);
    expect(links).toHaveLength(2);

    expect(links[0]).toHaveAttribute("href", "https://www.google.com/");
    expect(links[0]).toHaveAttribute("target", "_blank");
  });
});
