import { screen, render } from "@/lib/test";
import { LocaleSwitcher } from "./locale-switcher";

describe("LocaleSwitcher", () => {
  beforeEach(() => {
    render(<LocaleSwitcher />);
  });

  test("should render component", async () => {
    expect(screen.getByRole("combobox")).toBeVisible();
  });

  test("should allow change locale", async () => {
    const select = screen.getByRole("combobox");
    expect(select).toBeVisible();
  });
});
