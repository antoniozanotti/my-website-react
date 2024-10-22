import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  clearMocks: true,
  coverageProvider: "babel",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*-test.ts?(x)"],
};
export default createJestConfig(config);
