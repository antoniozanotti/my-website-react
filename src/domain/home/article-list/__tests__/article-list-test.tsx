import { screen, render, fireEvent } from "@/lib/test";
import { ArticleList } from "../article-list";
import { ExperienceMocks } from "../../experience/__tests__/experience-mocks";

describe("ArticleList", () => {
  it("should render article, button for more", async () => {
    const { container } = render(
      <ArticleList
        articles={ExperienceMocks.positions}
        showArticle={(visibleInShortVersion: boolean) => true}
        labelForMore="LabelForMore"
        showButtonForMore
        setIsOpen={(isOpen: boolean) => {}}
      />
    );
    const title = screen.getAllByText(ExperienceMocks.positions[0].title)[0];
    const labelForMore = screen.getByText("LabelForMore");

    expect(title).toBeInTheDocument();
    expect(labelForMore).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should not render article", async () => {
    const { container } = render(
      <ArticleList
        articles={ExperienceMocks.positions}
        showArticle={(visibleInShortVersion: boolean) => false}
        labelForMore="LabelForMore"
        showButtonForMore
        setIsOpen={(isOpen: boolean) => {}}
      />
    );
    const title = screen.queryAllByText(ExperienceMocks.positions[0].title);

    expect(title).toEqual([]);
    expect(container).toMatchSnapshot();
  });

  it("should not render button for more", async () => {
    const { container } = render(
      <ArticleList
        articles={ExperienceMocks.positions}
        showArticle={(visibleInShortVersion: boolean) => true}
        labelForMore="LabelForMore"
        showButtonForMore={false}
        setIsOpen={(isOpen: boolean) => {}}
      />
    );
    const labelForMore = screen.queryAllByText("LabelForMore");

    expect(labelForMore).toEqual([]);
    expect(container).toMatchSnapshot();
  });

  it("should trigger setIsOpen", async () => {
    let isOpenParent = false;
    const { container } = render(
      <ArticleList
        articles={ExperienceMocks.positions}
        showArticle={(visibleInShortVersion: boolean) => true}
        labelForMore="LabelForMore"
        showButtonForMore
        setIsOpen={(isOpen: boolean) => { isOpenParent = isOpen }}
      />
    );
    const labelForMore = screen.getByText("LabelForMore");

    await fireEvent.click(labelForMore);

    expect(isOpenParent).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
