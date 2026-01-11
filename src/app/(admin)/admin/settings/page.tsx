import { Constants } from "@app/src/constants";
import { SettingsContainer } from "@app/src/containers/web/admin/settings";
import ServerSideTranslations from "@app/src/lib/dictionaries/ServerSideTranslations";
import Translations from "@app/src/lib/dictionaries/Translations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: Constants.META_EN.TITLE,
};

export default async function settingsPage() {
  const translations = await ServerSideTranslations(["common", "home"]);

  return (
    <Translations _PropsTranslation={translations}>
      <SettingsContainer />
    </Translations>
  );
}
