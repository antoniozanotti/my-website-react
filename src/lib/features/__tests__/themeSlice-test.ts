import reducer, { ThemeState, toggleTheme, initialState } from "../themeSlice";

describe("ThemeSlice", () => {
  it("should return the initial state", () => {
    const currentState: ThemeState = reducer(initialState, { type: "unknown" });

    expect(currentState).toEqual({ value: "dark" });
  });

  it("should return light theme", () => {
    const currentState: ThemeState = reducer(initialState, toggleTheme());

    expect(currentState).toEqual({ value: "" });
  });

  it("should back to dark theme", () => {
    let currentState: ThemeState = reducer(initialState, toggleTheme());
    currentState = reducer(currentState, toggleTheme());

    expect(currentState).toEqual({ value: "dark" });
  });
});
