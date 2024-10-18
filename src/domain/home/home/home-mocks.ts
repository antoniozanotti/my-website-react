import { HomeInterface } from "@/domain/home/home/home-interface";
import { AboutMocks } from "../about/about-mocks";
import { ExperienceMocks } from "../experience/experience-mocks";
import { ProjectsMocks } from "../projects/projects-mocks";

export const HomeMocks: HomeInterface = {
  aboutParagraphs: AboutMocks.paragraphs,
  projects: ProjectsMocks.projects,
  positions: ExperienceMocks.positions,
};
