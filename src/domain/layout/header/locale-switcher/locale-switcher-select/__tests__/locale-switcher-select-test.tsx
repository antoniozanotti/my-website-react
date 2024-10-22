import { screen, render } from "@/lib/test";
import { LocaleSwitcherSelect } from "../locale-switcher-select";

describe("LocaleSwitcher", () => {
  it("should render component", async () => {
    const { container } = render(
      <LocaleSwitcherSelect defaultValue="en" label="Change Language">
        <option value="en">English</option>
        <option value="pt">Português</option>
      </LocaleSwitcherSelect>
    );
    
    expect(screen.getAllByRole("option")).toHaveLength(2);
    expect(container).toMatchSnapshot();
  });
});
