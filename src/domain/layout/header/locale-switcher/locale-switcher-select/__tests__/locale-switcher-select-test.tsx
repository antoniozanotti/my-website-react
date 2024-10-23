import { screen, render, userEvent } from "@/lib/test";
import { LocaleSwitcherSelect } from "../locale-switcher-select";

describe("LocaleSwitcher", () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = render(
      <LocaleSwitcherSelect defaultValue="en" label="Change Language">
        <option value="en">English</option>
        <option value="pt">Português</option>
      </LocaleSwitcherSelect>
    ).container;
  });

  it("should render component", async () => {
    expect(screen.getAllByRole("option")).toHaveLength(2);
    expect(container).toMatchSnapshot();
  });

  it("should trigger onSelectChange", async () => {
    const user = userEvent.setup();
    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "pt");

    expect(select).toHaveValue("pt");
  });
});
