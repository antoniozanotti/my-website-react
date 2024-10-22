import { render, screen } from "@/lib/test";
import { About } from "../about";
import { AboutMocks } from "./about-mocks";

describe("About", () => {
  it("should render paragraphs", async () => {
    render(<About paragraphs={AboutMocks.paragraphs} />);

    const paragraph1 = screen.getByText(AboutMocks.paragraphs[0]);
    const paragraph2 = screen.getByText(AboutMocks.paragraphs[1]);

    expect(paragraph1).toBeVisible();
    expect(paragraph2).toBeVisible();
  });
});
