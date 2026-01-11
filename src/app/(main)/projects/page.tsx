import { Constants } from "@app/src/constants";
import { ProjectsContainer } from "@app/src/containers/web/projects";
import ServerSideTranslations from "@app/src/lib/dictionaries/ServerSideTranslations";
import Translations from "@app/src/lib/dictionaries/Translations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: Constants.META_EN.TITLE,
};

export default async function projectsPage() {
  const translations = await ServerSideTranslations(["projects"]);

  return (
    <Translations _PropsTranslation={translations}>
      <ProjectsContainer />
    </Translations>
  );
}
