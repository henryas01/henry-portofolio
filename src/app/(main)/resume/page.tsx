import { Constants } from "@app/src/constants";
import { ResumeContainer } from "@app/src/containers/web/resume";
import ServerSideTranslations from "@app/src/lib/dictionaries/ServerSideTranslations";
import Translations from "@app/src/lib/dictionaries/Translations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: Constants.META_EN.TITLE,
};

export default async function ResumePage() {
  const translations = await ServerSideTranslations(["common", "resume"]);

  return (
    <Translations _PropsTranslation={translations}>
      <ResumeContainer />
    </Translations>
  );
}
