import { screen, render } from "@/lib/test";
import { Form } from "../form";

describe("Form", () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = render(<Form />).container;
  });

  it("should render form", async () => {
    const nameField = screen.getByRole("textbox", { name: "Name" });
    const emailField = screen.getByRole("textbox", { name: "Email" });
    const messageField = screen.getByRole("textbox", { name: "Message" });
    const button = screen.getByRole("button");

    expect(container).toMatchSnapshot();
  });
});
