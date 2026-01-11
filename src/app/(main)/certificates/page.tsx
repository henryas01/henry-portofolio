import { Constants } from "@app/src/constants";
import { CertificatesContainer } from "@app/src/containers/web/certificates";
import ServerSideTranslations from "@app/src/lib/dictionaries/ServerSideTranslations";
import Translations from "@app/src/lib/dictionaries/Translations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: Constants.META_EN.TITLE,
};

export default async function certificatesPage() {
  const translations = await ServerSideTranslations(["certificates"]);

  return (
    <Translations _PropsTranslation={translations}>
      <CertificatesContainer />
    </Translations>
  );
}
