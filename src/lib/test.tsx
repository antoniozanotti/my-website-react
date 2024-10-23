import React, { ReactElement } from "react";
import {
  render,
  RenderOptions,
  RenderResult,
  Screen,
} from "@testing-library/react";
import { Theme } from "@/domain/theme/theme/theme";
import { Providers } from "../app/providers";
import messages from "@/messages/en.json";

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return (
    <Providers locale="en" messages={messages}>
      <Theme>
        <div data-testid="container">{children}</div>
      </Theme>
    </Providers>
  );
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

function firstComponent(screen: Screen) {
  return screen.getByTestId("container").firstChild;
}

export * from "@testing-library/react";
export * from "@testing-library/user-event";
export { customRender as render, firstComponent };
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => {
  return {
    useRouter() {
      return { push: () => {} };
    },
    useParams: () => ({}),
  };
});
