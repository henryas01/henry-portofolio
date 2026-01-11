"use client";

import { useContext } from "react";
import { HomeContext } from "@app/src/modules/home/contexts";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";

import CertificatesComponent from "./component";

export const CertificatesContainer = () => {
  const { setDataHome, name } = useContext(HomeContext);

  return (
    <div>
      <CertificatesComponent />
    </div>
  );
};
