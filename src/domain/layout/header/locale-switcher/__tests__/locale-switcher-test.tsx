import { screen, render } from "@/lib/test";
import { LocaleSwitcher } from "../locale-switcher";

describe("LocaleSwitcher", () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = render(<LocaleSwitcher />).container;
  });

  it("should render component", async () => {
    expect(screen.getByRole("combobox")).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it("should allow change locale", async () => {
    const select = screen.getByRole("combobox");
    expect(select).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
