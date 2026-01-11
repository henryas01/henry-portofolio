import { Constants } from "@app/src/constants";
import { RequestContainer } from "@app/src/containers/web/customer/request";
import ServerSideTranslations from "@app/src/lib/dictionaries/ServerSideTranslations";
import Translations from "@app/src/lib/dictionaries/Translations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: Constants.META_EN.TITLE,
};

export default async function requestPage() {
  const translations = await ServerSideTranslations(["common", "home"]);

  return (
    <Translations _PropsTranslation={translations}>
      <RequestContainer />
    </Translations>
  );
}
