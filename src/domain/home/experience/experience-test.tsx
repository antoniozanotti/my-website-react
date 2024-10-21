import { screen, render } from "@/lib/test";
import { Experience } from "./experience";
import { ExperienceMocks } from './experience-mocks';

describe("Experience", () => {
  test("should render section", async () => {
    render(<Experience positions={ExperienceMocks.positions} />);
    const title = screen.getByRole("heading", {name: "Experience"});
    
    expect(title).toBeVisible();
  });
});
