import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  value: "dark" | "";
}

const initialState = { value: "dark" } satisfies ThemeState as ThemeState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.value = state.value==="dark" ? "" : "dark";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
