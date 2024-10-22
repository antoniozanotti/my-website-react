import {
  render,
  firstComponent,
  screen,
  fireEvent,
  getAllByText,
} from "@/lib/test";
import { ArticleParagraphsStory } from "./article-paragraphs-story";

describe("ArticleParagraphs", () => {
  it("should render paragraphs and handle callbacks", async () => {
    let isOpen = false;
    const { container } = render(
      <ArticleParagraphsStory
        paragraphs={["Paragraph1", "Paragraph2"]}
        setIsOpen={(isOpenParam) => {
          isOpen = isOpenParam;
        }}
      />
    );
    const component = firstComponent(screen);
    const paragraphs = screen.getAllByRole("paragraph");
    const seeMore = getAllByText(container, "See more...")[0];

    fireEvent.click(seeMore);

    expect(component).toBeVisible();
    expect(paragraphs).toHaveLength(2);
    expect(component).toHaveTextContent("Paragraph1");
    expect(component).toHaveTextContent("Paragraph2");
    expect(isOpen).toBeTruthy();
  });
});
