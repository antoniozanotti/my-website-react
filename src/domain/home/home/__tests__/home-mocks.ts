import { HomeInterface } from "@/domain/home/home/home-interface";
import { AboutMocks } from "../../about/__tests__/about-mocks";
import { ExperienceMocks } from "../../experience/__tests__/experience-mocks";
import { ProjectsMocks } from "../../projects/__tests__/projects-mocks";

export const HomeMocks: HomeInterface = {
  aboutParagraphs: AboutMocks.paragraphs,
  projects: ProjectsMocks.projects,
  positions: ExperienceMocks.positions,
};
