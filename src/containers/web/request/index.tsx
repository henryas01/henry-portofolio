"use client";

import { useContext, useEffect } from "react";
import { HomeContext } from "@app/src/modules/home/contexts";
import useTranslation from "@app/src/lib/dictionaries/hooks/useTranslation";

import RequestApplicationComponent from "./component";

export const RequestContainer = () => {
  const { setDataHome, name } = useContext(HomeContext);

  const { t: tHome } = useTranslation("home");

  return (
    <div>
      {/* <p> name Translate {tHome("title")}</p>
      <p>name Context Value: {name}</p> */}
      <RequestApplicationComponent />
    </div>
  );
};
